"use client";
import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {ArrowUpRight,Briefcase,Check,FileText,FolderKanban,ImagePlus,LogOut,Pencil,Plus,Search,Trash2,X,AlertTriangle,Loader2} from 'lucide-react';

type Kind='posts'|'caseStudies'|'careers';
type Item=Record<string,unknown>&{slug:string;date:string};
type Field={k:string;label:string;type:'text'|'textarea'|'body'|'select'|'image'|'lines'|'date';req?:boolean;opts?:string[];ph?:string;hint?:string;half?:boolean};

const KINDS:{id:Kind;label:string;single:string;icon:typeof FileText;titleKey:string;subKey:string;publicPath:(s:string)=>string;fields:Field[]}[]=[
 {id:'posts',label:'Articles',single:'article',icon:FileText,titleKey:'title',subKey:'category',publicPath:s=>`/journal/${s}`,fields:[
  {k:'title',label:'Title',type:'text',req:true,ph:'How buyers shortlist software in 2026'},
  {k:'slug',label:'URL slug',type:'text',req:true,half:true,hint:'Auto-filled from the title'},
  {k:'category',label:'Category',type:'select',opts:['Strategy','Distribution','Measurement','Insight','Guide'],half:true},
  {k:'description',label:'Short description',type:'textarea',req:true,ph:'One or two sentences shown on the article card.'},
  {k:'cover',label:'Cover image',type:'image'},
  {k:'body',label:'Article',type:'body',req:true},
  {k:'date',label:'Publish date',type:'date',half:true},
 ]},
 {id:'caseStudies',label:'Case studies',single:'case study',icon:FolderKanban,titleKey:'title',subKey:'client',publicPath:s=>`/work/${s}`,fields:[
  {k:'client',label:'Client',type:'text',req:true,half:true,ph:'Acme Inc.'},
  {k:'industry',label:'Industry',type:'text',req:true,half:true,ph:'Local listings software'},
  {k:'title',label:'Headline',type:'text',req:true,ph:'Named in AI answers for their core category'},
  {k:'slug',label:'URL slug',type:'text',req:true,half:true,hint:'Auto-filled from the headline'},
  {k:'date',label:'Date',type:'date',half:true},
  {k:'summary',label:'Summary',type:'textarea',req:true,ph:'What we did and what changed, in two sentences.'},
  {k:'results',label:'Key results',type:'lines',ph:'One result per line',hint:'Up to three show on the card'},
  {k:'logo',label:'Client logo',type:'image',half:true},
  {k:'cover',label:'Cover image',type:'image',half:true},
  {k:'body',label:'Full story',type:'body',req:true},
 ]},
 {id:'careers',label:'Careers',single:'opening',icon:Briefcase,titleKey:'title',subKey:'team',publicPath:s=>`/careers/${s}`,fields:[
  {k:'title',label:'Role',type:'text',req:true,ph:'Content Strategist'},
  {k:'slug',label:'URL slug',type:'text',req:true,half:true,hint:'Auto-filled from the role'},
  {k:'team',label:'Team',type:'text',req:true,half:true,ph:'Growth'},
  {k:'location',label:'Location',type:'text',req:true,half:true,ph:'Remote, India'},
  {k:'type',label:'Type',type:'select',opts:['Full-time','Part-time','Internship','Contract'],half:true},
  {k:'summary',label:'Summary',type:'textarea',req:true,ph:'One or two sentences about the role.'},
  {k:'body',label:'Role details',type:'body',req:true},
  {k:'apply',label:'Apply link (optional)',type:'text',ph:'https://… or leave blank to use contact@nakama.in',half:true},
  {k:'date',label:'Posted',type:'date',half:true},
 ]},
];

const today=()=>new Date().toISOString().slice(0,10);
const slugify=(s:string)=>s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g,'').trim().replace(/[\s_]+/g,'-').replace(/-+/g,'-').slice(0,80);
const blank=(kind:Kind):Item=>{const o:Item={slug:'',date:today()};for(const f of KINDS.find(k=>k.id===kind)!.fields){if(f.k==='slug'||f.k==='date')continue;o[f.k]=f.type==='lines'?[]:f.type==='select'?f.opts![0]:'';}return o;};

export function AdminDashboard({canPublish}:{canPublish:boolean}){
 const [kind,setKind]=useState<Kind>('posts');
 const [data,setData]=useState<Record<Kind,Item[]|null>>({posts:null,caseStudies:null,careers:null});
 const [editing,setEditing]=useState<{item:Item;orig:string|null}|null>(null);
 const [q,setQ]=useState('');
 const [toast,setToast]=useState<{t:string;bad?:boolean}|null>(null);
 const [saving,setSaving]=useState(false);
 const [confirm,setConfirm]=useState<Item|null>(null);
 const meta=KINDS.find(k=>k.id===kind)!;

 const flash=(t:string,bad=false)=>{setToast({t,bad});setTimeout(()=>setToast(null),4200);};
 const load=useCallback(async(k:Kind)=>{
  const r=await fetch(`/api/admin/content?kind=${k}`);
  if(r.status===401){location.reload();return;}
  const j=await r.json();setData(d=>({...d,[k]:j.items||[]}));
 },[]);
 useEffect(()=>{KINDS.forEach(k=>load(k.id));},[load]);

 async function persist(items:Item[],note:string){
  setSaving(true);
  const r=await fetch('/api/admin/content',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({kind,items,note})});
  const j=await r.json().catch(()=>({}));setSaving(false);
  if(!r.ok){flash(j.error||'Could not save.',true);return false;}
  setData(d=>({...d,[kind]:items}));flash('Published. The site updates in about a minute.');return true;
 }
 async function save(item:Item){
  const list=[...(data[kind]||[])];
  const i=editing?.orig?list.findIndex(x=>x.slug===editing.orig):-1;
  if(list.some((x,j)=>x.slug===item.slug&&j!==i)){flash('Another item already uses that URL slug.',true);return;}
  if(i>=0)list[i]=item;else list.unshift(item);
  if(await persist(list,`${i>=0?'update':'add'} ${meta.single} ${item.slug}`))setEditing(null);
 }
 async function remove(item:Item){
  setConfirm(null);
  await persist((data[kind]||[]).filter(x=>x.slug!==item.slug),`remove ${meta.single} ${item.slug}`);
 }
 async function logout(){await fetch('/api/admin/logout',{method:'POST'});location.reload();}

 const items=useMemo(()=>{
  const l=[...(data[kind]||[])].sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  const t=q.trim().toLowerCase();return t?l.filter(x=>JSON.stringify(x).toLowerCase().includes(t)):l;
 },[data,kind,q]);

 return <div className="adm">
  <aside className="adm-side">
   <div className="adm-brand"><img src="/brand/nakama-icon-dark.svg" alt=""/><span>nakama</span><em>Admin</em></div>
   <nav>
    {KINDS.map(k=>{const I=k.icon;return <button key={k.id} className={k.id===kind?'on':''} onClick={()=>{setKind(k.id);setEditing(null);setQ('');}}>
     <I size={17}/><span>{k.label}</span><small>{data[k.id]?.length??'·'}</small>
    </button>;})}
   </nav>
   <div className="adm-side-foot">
    <div className={`adm-status${canPublish?' ok':''}`}><i/>{canPublish?'Publishing connected':'Publishing not connected'}</div>
    <a href="/" target="_blank" rel="noreferrer">View site<ArrowUpRight size={14}/></a>
    <button onClick={logout}><LogOut size={15}/>Log out</button>
   </div>
  </aside>

  <main className="adm-main">
   {!canPublish&&<div className="adm-banner"><AlertTriangle size={17}/><div><b>Publishing is not connected yet.</b> You can draft here, but saving needs a <code>GITHUB_TOKEN</code> environment variable in Vercel (fine-grained, Contents: read and write on this repo). Add it once and every save goes live automatically.</div></div>}

   <header className="adm-head">
    <div><h1>{meta.label}</h1><p>{data[kind]===null?'Loading…':`${data[kind]!.length} ${data[kind]!.length===1?meta.single:meta.label.toLowerCase()} published`}</p></div>
    <div className="adm-head-actions">
     <label className="adm-search"><Search size={15}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder={`Search ${meta.label.toLowerCase()}`}/></label>
     <button className="adm-primary" onClick={()=>setEditing({item:blank(kind),orig:null})}><Plus size={16}/>New {meta.single}</button>
    </div>
   </header>

   {data[kind]===null?<div className="adm-empty"><Loader2 className="spin" size={20}/></div>
   :items.length?<ul className="adm-list">
    {items.map(it=><li key={it.slug} className="adm-row">
     <div className="adm-row-thumb">{(it.cover||it.logo)?<img src={String(it.cover||it.logo)} alt=""/>:<meta.icon size={18}/>}</div>
     <div className="adm-row-main"><b>{String(it[meta.titleKey]||'Untitled')}</b><span>{String(it[meta.subKey]||'')}<i>·</i>{meta.publicPath(it.slug)}</span></div>
     <time>{new Date(it.date+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</time>
     <div className="adm-row-act">
      <a href={meta.publicPath(it.slug)} target="_blank" rel="noreferrer" aria-label="Open on site"><ArrowUpRight size={16}/></a>
      <button onClick={()=>setEditing({item:{...it},orig:it.slug})} aria-label="Edit"><Pencil size={15}/></button>
      <button onClick={()=>setConfirm(it)} aria-label="Delete" className="danger"><Trash2 size={15}/></button>
     </div>
    </li>)}
   </ul>
   :<div className="adm-empty"><meta.icon size={26}/><b>{q?'No matches':`No ${meta.label.toLowerCase()} yet`}</b><p>{q?'Try a different search.':kind==='careers'?'With no openings, the careers page shows a “check back soon” message.':`Create your first ${meta.single} and it goes live on the site.`}</p>{!q&&<button className="adm-primary" onClick={()=>setEditing({item:blank(kind),orig:null})}><Plus size={16}/>New {meta.single}</button>}</div>}
  </main>

  {editing&&<Editor key={editing.orig||'new'} kind={kind} initial={editing.item} isNew={!editing.orig} saving={saving} canPublish={canPublish} onClose={()=>setEditing(null)} onSave={save} flash={flash}/>}

  {confirm&&<div className="adm-modal" onClick={()=>setConfirm(null)}><div className="adm-confirm" onClick={e=>e.stopPropagation()}>
   <h3>Delete this {meta.single}?</h3><p>“{String(confirm[meta.titleKey])}” will be removed from the site.</p>
   <div><button className="adm-ghost" onClick={()=>setConfirm(null)}>Cancel</button><button className="adm-primary danger" onClick={()=>remove(confirm)}>Delete</button></div>
  </div></div>}

  {toast&&<div className={`adm-toast${toast.bad?' bad':''}`}>{toast.bad?<AlertTriangle size={16}/>:<Check size={16}/>}{toast.t}</div>}
 </div>;
}

function Editor({kind,initial,isNew,saving,canPublish,onClose,onSave,flash}:{kind:Kind;initial:Item;isNew:boolean;saving:boolean;canPublish:boolean;onClose:()=>void;onSave:(i:Item)=>void;flash:(t:string,bad?:boolean)=>void}){
 const meta=KINDS.find(k=>k.id===kind)!;
 const [it,setIt]=useState<Item>(initial);
 const [slugTouched,setSlugTouched]=useState(!isNew);
 const [errs,setErrs]=useState<Record<string,boolean>>({});
 const set=(k:string,v:unknown)=>setIt(p=>{const n={...p,[k]:v};if(k===meta.titleKey&&!slugTouched)n.slug=slugify(String(v));return n;});
 useEffect(()=>{const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();};addEventListener('keydown',esc);return()=>removeEventListener('keydown',esc);},[onClose]);

 function submit(e:React.FormEvent){
  e.preventDefault();
  const bad:Record<string,boolean>={};
  for(const f of meta.fields){const v=it[f.k];if(f.req&&(!v||(typeof v==='string'&&!v.trim())))bad[f.k]=true;}
  if(it.slug&&!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(it.slug))bad.slug=true;
  setErrs(bad);if(Object.keys(bad).length){flash('Fill in the highlighted fields.',true);return;}
  const out:Item={...it};for(const f of meta.fields)if(typeof out[f.k]==='string')out[f.k]=(out[f.k] as string).trim();
  onSave(out);
 }

 return <div className="adm-drawer-wrap" onMouseDown={onClose}>
  <form className="adm-drawer" onMouseDown={e=>e.stopPropagation()} onSubmit={submit}>
   <header><div><small>{isNew?'New':'Edit'} {meta.single}</small><h2>{String(it[meta.titleKey]||`Untitled ${meta.single}`)}</h2></div><button type="button" onClick={onClose} aria-label="Close"><X size={18}/></button></header>
   <div className="adm-fields">
    {meta.fields.map(f=><div key={f.k} className={`adm-field${f.half?' half':''}${errs[f.k]?' bad':''}`}>
     <label htmlFor={`f-${f.k}`}>{f.label}{f.req&&<i>*</i>}{f.hint&&<small>{f.hint}</small>}</label>
     <FieldInput f={f} value={it[f.k]} onChange={v=>{if(f.k==='slug'){setSlugTouched(true);set('slug',slugify(String(v)));}else set(f.k,v);}} canPublish={canPublish} flash={flash}/>
    </div>)}
   </div>
   <footer><button type="button" className="adm-ghost" onClick={onClose}>Cancel</button><button className="adm-primary" disabled={saving||!canPublish}>{saving?<><Loader2 className="spin" size={16}/>Publishing…</>:<><Check size={16}/>{isNew?'Publish':'Save changes'}</>}</button></footer>
  </form>
 </div>;
}

function FieldInput({f,value,onChange,canPublish,flash}:{f:Field;value:unknown;onChange:(v:unknown)=>void;canPublish:boolean;flash:(t:string,bad?:boolean)=>void}){
 const id=`f-${f.k}`;const fileRef=useRef<HTMLInputElement>(null);const [up,setUp]=useState(false);
 if(f.type==='select')return <div className="adm-select"><select id={id} value={String(value||f.opts![0])} onChange={e=>onChange(e.target.value)}>{f.opts!.map(o=><option key={o}>{o}</option>)}</select></div>;
 if(f.type==='date')return <input id={id} type="date" value={String(value||'')} onChange={e=>onChange(e.target.value)}/>;
 if(f.type==='textarea')return <textarea id={id} rows={3} value={String(value||'')} placeholder={f.ph} onChange={e=>onChange(e.target.value)}/>;
 if(f.type==='lines')return <textarea id={id} rows={3} value={(value as string[]||[]).join('\n')} placeholder={f.ph} onChange={e=>onChange(e.target.value.split('\n').map(s=>s.replace(/^\s+/,'')).filter((s,i,a)=>s||i===a.length-1))}/>;
 if(f.type==='body')return <div className="adm-body"><textarea id={id} rows={14} value={String(value||'')} placeholder={'## First section heading\n\nWrite a paragraph here.\n\nLeave a blank line between paragraphs.\n\n## Next section'} onChange={e=>onChange(e.target.value)}/><p>Start a section with <code>## Heading</code>. Leave a blank line between paragraphs.</p></div>;
 if(f.type==='image'){
  async function pick(file?:File){
   if(!file)return;if(!canPublish){flash('Uploads need publishing to be connected.',true);return;}
   setUp(true);const fd=new FormData();fd.append('file',file);
   const r=await fetch('/api/admin/upload',{method:'POST',body:fd});const j=await r.json().catch(()=>({}));setUp(false);
   if(!r.ok){flash(j.error||'Upload failed.',true);return;}onChange(j.url);
  }
  const v=String(value||'');
  return <div className={`adm-image${v?' has':''}`} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();pick(e.dataTransfer.files[0]);}}>
   {v?<img src={v} alt="" onError={e=>{const el=e.currentTarget;if(v.startsWith('/uploads/')&&!el.dataset.f){el.dataset.f='1';el.src=`https://raw.githubusercontent.com/asmit-beep/nakama-website/main/public${v}`;}}}/>:<span className="adm-image-ph">{up?<Loader2 className="spin" size={18}/>:<ImagePlus size={18}/>}<b>{up?'Uploading…':'Drop an image or browse'}</b><small>PNG, JPG, WebP · under 3.5 MB</small></span>}
   <div className="adm-image-act"><button type="button" onClick={()=>fileRef.current?.click()}>{v?'Replace':'Browse'}</button>{v&&<button type="button" onClick={()=>onChange('')}>Remove</button>}</div>
   <input ref={fileRef} id={id} type="file" accept="image/png,image/jpeg,image/webp,image/gif" hidden onChange={e=>pick(e.target.files?.[0])}/>
  </div>;
 }
 return <input id={id} type="text" value={String(value||'')} placeholder={f.ph} onChange={e=>onChange(e.target.value)}/>;
}
