// @ts-nocheck
/** Soften twin v7.7.1 motion, scoped to `.y7`. JS matches v7.6; the v7.7 delta is CSS and markup.
 *  Poster iframes are not ported: LiteYouTube owns sample click-to-play.
 *  The preloader is hidden, not removed, because React owns the node.
 *  done / ticks / shot / rm / ondark land on `.y7`.
 */
export function bootYoutube(root: HTMLElement): () => void {
 let dead = false;
 const listeners = [];
 const timers = new Set();
 const rafs = new Set();
 const ios = [];
 const listen = (target, ev, fn, opt) => {
  target.addEventListener(ev, fn, opt);
  listeners.push(() => target.removeEventListener(ev, fn, opt));
 };
 const addEventListener = (ev, fn, opt) => listen(window, ev, fn, opt);
 const setTimeout = (fn, ms) => {
  const id = window.setTimeout(() => { timers.delete(id); if (!dead) fn(); }, ms);
  timers.add(id);
  return id;
 };
 const clearTimeout = (id) => { timers.delete(id); window.clearTimeout(id); };
 const requestAnimationFrame = (fn) => {
  const id = window.requestAnimationFrame((n) => { rafs.delete(id); if (!dead) fn(n); });
  rafs.add(id);
  return id;
 };
 const cancelAnimationFrame = (id) => { rafs.delete(id); window.cancelAnimationFrame(id); };
 const IntersectionObserver = function(cb, opt) {
  const o = new window.IntersectionObserver((entries, obs) => { if (!dead) cb(entries, obs); }, opt);
  ios.push(o);
  return o;
 };
 const byId = (id) => root.querySelector('#' + id);

/* v7.7.1 · copy of v7.6 JS, unchanged */
/* Soften twin v7.0.1 · MOTION-PACK-V70 wired · Gohan
   MOTION-PACK-V70 HOOK: Kizami delta lands here. Only edit values in M (second IIFE) + the V70 block marked "V70 park-play". Base timings = MOTION-PACK-V50.
   MOTION-PACK-V50 hook: all timings below come from motion/MOTION-PACK-V50.md (Kizami). Swap values in M only — no DOM rewrite needed.
   Soften twin v5.0 · Live Edit Bay · Gohan */
(()=>{const d=document,b=root,q=new URLSearchParams(location.search),rm=matchMedia('(prefers-reduced-motion: reduce)').matches,shot=q.has('shot');
const pre=byId('pre'),seen=(function(){try{return sessionStorage.getItem('rollSeen')}catch(e){return null}})();
const after=()=>{b.classList.add('done','ticks');setTimeout(preview,300);setTimeout(lazyAtmo,0)};
if(shot){b.classList.add('shot','done');(pre.style.display='none')}
else if(rm||seen){(pre.style.display='none');rm?b.classList.add('done'):after()}
else{try{sessionStorage.setItem('rollSeen','1')}catch(e){};const t=root.querySelector('.pre-tc'),t0=performance.now();(function f(n){const ms=n-t0,fr=Math.min(24,Math.floor(ms*.024));t.textContent='00:00:'+(fr>=24?'01:00':'00:'+String(fr).padStart(2,'0'));if(ms<1000)requestAnimationFrame(f)})(t0);
 setTimeout(after,1250);setTimeout(()=>(pre.style.display='none'),1520)}
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});
root.querySelectorAll('.rv,.eng li').forEach(el=>rm||shot?el.classList.add('in'):io.observe(el));
// chapter rail + scrub
const links=[...root.querySelectorAll('.rail a')];links.forEach((a,i)=>a.querySelector('b').style.setProperty('--i',i));const rh=byId('rhead'),rtc=byId('rtc'),ROOT=root,DOC=d.documentElement;const headTo=a=>{rh.style.transform='translateY('+a.offsetTop+'px)'},sc=byId('scrub'),tc=byId('tc');
const tcf=sec=>{const f=Math.floor(sec*24)%24,s=Math.floor(sec);return[Math.floor(s/3600),Math.floor(s/60)%60,s%60,f].map(x=>String(x).padStart(2,'0')).join(':')};
const hasTL=CSS.supports('animation-timeline','scroll()');let lp=0,tp=0,prev=false;
function preview(){if(rm)return;prev=true;const[a0,a1]=links;headTo(a1);a1.classList.add('pv');setTimeout(()=>{headTo(a0);a1.classList.remove('pv')},600);setTimeout(()=>{prev=false;sync()},1300)}
let cur=links[0];const sync=()=>{links.forEach(a=>a.classList.toggle('on',a===cur));if(!prev)headTo(cur)};
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cur=links.find(a=>a.dataset.k===e.target.id)||cur;sync()}}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>cio.observe(byId(a.dataset.k)));sync();
const hero=root.querySelector('.hero');
const upd=()=>{tp=DOC.scrollTop/(DOC.scrollHeight-innerHeight||1);sc.style.height=(tp*100)+'%';const t=tcf(tp*390);rtc.textContent=t;if(tc)tc.textContent=t;
 const st=[...root.querySelectorAll('.pstep')];let act=0;st.forEach((x,i)=>{if(x.getBoundingClientRect().top<innerHeight*.55)act=i});
 st.forEach((x,i)=>x.classList.toggle('on',i===act));root.querySelectorAll('.pnav li').forEach((x,i)=>x.classList.toggle('on',i===act))};
if(!hasTL&&!shot){(function loop(){lp+=(tp-lp)*(rm?1:.18);ROOT.style.setProperty('--p',lp.toFixed(4));const r=hero.getBoundingClientRect(),u=Math.min(1,Math.max(0,-r.top/(r.height*.4)));ROOT.style.setProperty('--u',(rm?1:.62+.38*u).toFixed(3));requestAnimationFrame(loop)})()}
function lazyAtmo(){const v=root.querySelector('.atmo-vid');if(!v||rm)return;v.innerHTML='<source src="'+v.dataset.webm+'" type="video/webm"><source src="'+v.dataset.mp4+'" type="video/mp4">';v.load();
 v.addEventListener('playing',()=>v.classList.add('live'),{once:true});new IntersectionObserver(([e])=>e.isIntersecting?v.play().catch(()=>{}):v.pause()).observe(hero)}
addEventListener('scroll',upd,{passive:true});upd();
root.querySelectorAll('.pnav li').forEach((li,i)=>li.onclick=()=>root.querySelectorAll('.pstep')[i].scrollIntoView({behavior:rm?'auto':'smooth',block:'center'}));
// samples cut progress + wheel scrub
const cut=byId('cut'),cp=byId('cutp');cut.addEventListener('scroll',()=>{cp.style.width=(33+67*cut.scrollLeft/(cut.scrollWidth-cut.clientWidth||1))+'%'},{passive:true});
})();
(()=>{const M={fadeIn:300,script:300,shoot:1400,edit:2500,parkPlay:1500,parkFrom:.45,parkTo:.48,typeStep:41.67,typeChars:2,lead:160,morph:220,flashFrames:1,lerp:.25,snapZone:.025,snapMs:200,snapOff:.005,ccPx:40,runtime:390,fps:24,tiltMax:4,/*V70 ±4° around base*/tiltBase:-3.5,tiltCap:6,playDelay:300,resumeMs:2000,winPx:48,spLerp:.15,spill:{script:.10,shoot:.14,shoot0:.08,edit:.18,publish:.12,flash:.30},spBreathe:.02,k:170,c:26,keyF:.4,seatG:.06,seatX:24,magPx:6,magR:80,dockEnd:.6,dockScale:.18};
const d=document,b=root,q=new URLSearchParams(location.search),rm=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer:fine)').matches,shot=q.has('shot');
if(rm)b.classList.add('rm');
const bay=byId('bay'),mon=byId('mon');if(!bay)return;
const S=['script','shoot','edit','publish'],btns=[...bay.querySelectorAll('.stg button')],layers=Object.fromEntries([...bay.querySelectorAll('.st')].map(x=>[x.dataset.st,x]));
const pill=byId('pill'),live=byId('live'),flash=byId('flash'),typ=byId('type'),full=typ.dataset.full;
const CH=[{k:'Ch 1 · The question',t:'What your buyers are asking',s:''},{k:'Ch 2 · The short answer',t:'How to choose the right tool for your team',s:'The short answer: start with the questions your buyers already ask.'},{k:'Ch 3 · How to decide',t:'Three checks before you commit',s:''}];
const B=[0,72/390,220/390];/*V70 chapters 00:00 / 01:12 / 03:40*/
const CL=[[0,.11],[.112,.183],[.187,.3],[.302,.47],[.472,.562],[.566,.79],[.792,1]];/*V1: 7 varied clips*/let cur='edit',typeT=0,timers=[],auto=false;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const renderType=n=>{const t=full.slice(0,n);typ.innerHTML=t.split('\n').map(l=>l.startsWith('#')?'<span class="h">'+esc(l)+'</span>':esc(l)).join('\n')+'<span class="cur"></span>';
 const hs=[...full.matchAll(/^#/gm)].map(m=>m.index);bay.querySelectorAll('.mrg i').forEach((m,i)=>m.classList.toggle('in',n>hs[i]))};
function typeOn(){cancelAnimationFrame(typeT);if(rm||shot){renderType(full.length);return}const t0=performance.now();(function f(n){const c=Math.min(full.length,Math.floor((n-t0)/M.typeStep)*M.typeChars);renderType(c);if(c<full.length&&cur==='script')typeT=requestAnimationFrame(f)})(t0)}
// pill: translateX + scaleX, leading edge first (lead) then trailing (morph)
let pw=0,gap=8,pi=2;const pillAt=(l,r)=>{pill.style.setProperty('--px',l+'px');pill.style.setProperty('--psx',((r-l)/pw).toFixed(4))};
const measure=()=>{pw=btns[0].offsetWidth;gap=btns[1].offsetLeft-btns[0].offsetLeft-pw;pill.style.setProperty('--pw',pw+'px');pill.style.transition='none';pillAt(btns[pi].offsetLeft,btns[pi].offsetLeft+pw)};
function morph(from,to){const L=i=>btns[i].offsetLeft;if(rm||from===to){pill.style.transition='none';pillAt(L(to),L(to)+pw);return}
 const fwd=to>from;pill.style.transition=`transform ${M.lead}ms cubic-bezier(.22,1,.36,1)`;pillAt(fwd?L(from):L(to),fwd?L(to)+pw:L(from)+pw);
 setTimeout(()=>{pill.style.transition=`transform ${M.morph}ms cubic-bezier(.65,0,.35,1)`;pillAt(L(to),L(to)+pw)},M.lead)}
function setStage(s,{announce=true}={}){const i=S.indexOf(s),from=S.indexOf(cur);if(i<0)return;const prev=cur;cur=s;pi=i;bay.dataset.stage=s;b.dataset.stage=s;
 btns.forEach((x,j)=>{x.setAttribute('aria-pressed',j===i);x.classList.toggle('ok',j<i)});litTo=i;if(rm||from===i)litNow(i);else ulUntil=performance.now()+M.lead+M.morph+40;morph(from,i);
 Object.entries(layers).forEach(([k,el])=>{el.classList.toggle('on',k===s);el.classList.remove('in')});const el=layers[s];void el.offsetWidth;if(!rm)el.classList.add('in');
 if(s==='script')typeOn();
 spStage(s);pausePlay();if(!auto&&s==='edit'&&announce!==false)bump();if(s==='edit'&&!rm&&prev!==s){flash.classList.add('f');spFlash=1;let n=M.flashFrames;requestAnimationFrame(function g(){if(--n<0)flash.classList.remove('f');else requestAnimationFrame(g)})}
 if(announce)live.textContent=s[0].toUpperCase()+s.slice(1)+' stage'}
let litTo=2,ulUntil=0;const litNow=i=>btns.forEach((x,j)=>x.classList.toggle('lit',j===i));
// label colour cut when the underline centre crosses a segment (read live transform)
function ulTick(n){if(!ulUntil)return;const m=new DOMMatrix(getComputedStyle(pill).transform),c=m.e+pw*m.a/2;const k=btns.findIndex(x=>c>=x.offsetLeft&&c<x.offsetLeft+x.offsetWidth);if(k>=0)litNow(k);if(n>ulUntil){ulUntil=0;litNow(litTo)}}
const cancelAuto=()=>{if(!auto)return;auto=false;timers.forEach(clearTimeout);timers=[]};
btns.forEach(x=>x.addEventListener('click',()=>{cancelAuto();setStage(x.dataset.s);bump()}));
bay.addEventListener('keydown',e=>{if(e.target.id==='phd')return;let i=S.indexOf(cur);if(/^[1-4]$/.test(e.key))i=+e.key-1;else if(e.key==='ArrowRight')i=Math.min(3,i+1);else if(e.key==='ArrowLeft')i=Math.max(0,i-1);else return;e.preventDefault();cancelAuto();setStage(S[i]);btns[i].focus()});
listen(d,'keydown',e=>{if(/^[1-4]$/.test(e.key)&&!e.target.closest('input,textarea,.bay')&&bay.getBoundingClientRect().bottom>0){cancelAuto();setStage(S[+e.key-1])}});
// scrub
const lane=byId('lane'),phd=byId('phd'),ccw=byId('ccw'),mtc=byId('mtc'),ROOT=root,DOC=d.documentElement;
CL.forEach(([a,z],i)=>{const c=d.createElement('i');c.className='cl';c.style.left=(a*100)+'%';c.style.width=((z-a)*100)+'%';c.style.setProperty('--fo',(i*37%100)+'%');lane.insertBefore(c,phd)});
const segs=[...lane.querySelectorAll('.cl')];
// V70 speech envelope: syllable bursts inside words, short gaps between words, long pauses at phrase ends, silence at cuts
const NB=150;ccw.innerHTML='<i></i>'.repeat(NB);const bars=[...ccw.children];{let r=7;const rnd=()=>(r=(r*16807)%2147483647)/2147483647;let i=0;
 while(i<NB){const cut=CL.some(([a])=>a>0&&Math.abs(a*NB-i)<1.2);if(cut){bars[i++].style.height='4%';continue}
  const w=3+Math.floor(rnd()*7),pk=.45+rnd()*.55;for(let k=0;k<w&&i<NB;k++,i++){const env=Math.sin(Math.PI*(k+.5)/w),syl=.55+.45*Math.abs(Math.sin(k*2.1+rnd()));bars[i].style.height=Math.max(6,100*pk*env*syl)+'%'}
  const gap=rnd()<.18?3+Math.floor(rnd()*3):1+Math.floor(rnd()*2);for(let k=0;k<gap&&i<NB;k++,i++)bars[i].style.height=(4+rnd()*5)+'%'}}
// V70 waveform: base (cream 22%) + played copy (cream 40%, active chapter) + ember copy in a 48px feathered window. Transforms only.
const wvHTML=ccw.innerHTML;ccw.innerHTML='<div class="wv base">'+wvHTML+'</div><div class="wpc" id="wpc"><div class="wpl"><div class="wv pl">'+wvHTML+'</div></div></div><div class="wwin" id="wwin"><div class="wv em">'+wvHTML+'</div></div>';
const wpc=byId('wpc'),wpl=wpc.firstChild,wpli=wpl.firstChild,wwin=byId('wwin'),wem=wwin.firstChild,ENV=bars.map(x=>parseFloat(x.style.height)/100);
let lw=1,barX=[],pos=M.parkFrom,tgt=pos,drag=false,glide=null,chap=-1,ci=-1;
const tcf=v=>{const s=v*M.runtime,f=Math.floor(s*M.fps)%M.fps,S2=Math.floor(s);return[Math.floor(S2/3600),Math.floor(S2/60)%60,S2%60,f].map(x=>String(x).padStart(2,'0')).join(':')};
const clipOf=v=>v>=B[2]?2:v>=B[1]?1:0;
function paintHead(){const x=pos*lw;phd.style.setProperty('--hx',x+'px');ROOT.style.setProperty('--ph',pos.toFixed(4));const t=tcf(pos);mtc.textContent=t;
 wwin.style.transform=`translateX(${x-M.winPx/2}px)`;wem.style.transform=`translateX(${M.winPx/2-x}px)`;const c=clipOf(pos),ca=B[c]*lw;wpl.style.transform=`translateX(${x-ca-lw}px)`;wpli.style.transform=`translateX(${lw-x+ca-ca}px)`;wpc.style.transform=`translateX(${ca}px)`,ci=CL.findIndex(([a,z])=>pos>=a&&pos<z);segs.forEach((s,i)=>s.classList.toggle('on',i===ci));
 if(c!==chap){chap=c;wpc.style.width=((B[c+1]??1)-B[c])*lw+'px';byId('ck').textContent=CH[c].k;byId('ct').textContent=CH[c].t;byId('cs').textContent=CH[c].s}
 phd.setAttribute('aria-valuenow',Math.round(pos*100));phd.setAttribute('aria-valuetext',t+', '+CH[c].k)}
const ptr=e=>Math.min(1,Math.max(0,(e.clientX-lane.getBoundingClientRect().left)/lw));
lane.addEventListener('pointerdown',e=>{cancelAuto();pausePlay();drag=true;glide=null;lane.setPointerCapture(e.pointerId);tgt=ptr(e);if(rm)pos=tgt;if(cur!=='edit')setStage('edit')});
lane.addEventListener('pointermove',e=>{if(drag){tgt=ptr(e);if(rm)pos=tgt}},{passive:true});
const release=()=>{if(!drag)return;drag=false;bump();if(rm)return;const near=B.slice(1).find(x=>Math.abs(tgt-x)<=M.snapZone);if(near!=null){glide={a:pos,b:near+M.snapOff,t0:performance.now()};tgt=near+M.snapOff}};
lane.addEventListener('pointerup',release);lane.addEventListener('pointercancel',release);
phd.addEventListener('keydown',e=>{let v=tgt;if(e.key==='ArrowRight')v=e.shiftKey?(B.find(x=>x>pos+.001)??1):pos+.01;else if(e.key==='ArrowLeft')v=e.shiftKey?([...B].reverse().find(x=>x<pos-.011)??0):pos-.01;else return;e.preventDefault();cancelAuto();pausePlay();bump();tgt=Math.min(1,Math.max(0,v));if(rm)pos=tgt});
// tilt spring + light (pointer:fine only)
const tiltOK=fine&&!rm&&!shot;let mr=null,px=0,py=0,tx=0,ty=0,vx=0,vy=0,lx=-1,ly=-1,dockP=0,seat=root.querySelector('.atmo .seat');
if(tiltOK)listen(d,'pointermove',e=>{if(Math.abs(e.clientX-lx)<1&&Math.abs(e.clientY-ly)<1)return;lx=e.clientX;ly=e.clientY;if(!mr)return;
 px=Math.max(-1,Math.min(1,(e.clientX-(mr.left+mr.width/2))/(mr.width/2)));py=Math.max(-1,Math.min(1,(e.clientY-(mr.top+mr.height/2))/(mr.height/2)))},{passive:true});
root.querySelector('.hero')?.addEventListener('pointerleave',()=>{px=py=0});
// magnetic CTA
const cta=root.querySelector('.hero .btn.ember');let cr=null,mxT=0,myT=0,mx=0,my=0,mvx=0,mvy=0;
if(cta&&tiltOK)listen(d,'pointermove',e=>{if(!cr)return;const cx=Math.max(cr.left,Math.min(e.clientX,cr.right)),cy=Math.max(cr.top,Math.min(e.clientY,cr.bottom)),dist=Math.hypot(e.clientX-cx,e.clientY-cy);
 if(dist<=M.magR){const ox=e.clientX-(cr.left+cr.width/2),oy=e.clientY-(cr.top+cr.height/2),m=Math.hypot(ox,oy)||1,a=Math.min(M.magPx,m*.15);mxT=ox/m*a;myT=oy/m*a}else mxT=myT=0},{passive:true});
// scroll-dock (JS path works everywhere incl. Safari/Firefox)
const hero=root.querySelector('.hero'),rh=byId('rhead');let hr={top:0,h:1},dockV={x:0,y:0},sy=scrollY;
const dockOK=!rm&&!shot;
function rects(){lw=lane.clientWidth||1;barX=bars.map(x=>x.offsetLeft+x.offsetWidth/2);ccw.querySelectorAll('.wv').forEach(w=>w.style.width=lw+'px');wpl.style.width=lw+'px';chap=-1;measure();const st=scrollY;const r=mon.getBoundingClientRect();
 mr={left:r.left,top:r.top+0,width:r.width,height:r.height};cr=cta?.getBoundingClientRect();const h=hero.getBoundingClientRect();hr={top:h.top+st,h:h.height};
 const br=bay.getBoundingClientRect(),rr=rh.getBoundingClientRect();dockV={x:rr.left+3-(br.left+br.width/2),cyDoc:br.top+st+br.height/2,ry:rr.top+3}}
addEventListener('resize',rects);addEventListener('scroll',()=>{sy=scrollY;mr&&(mr.top=bay.getBoundingClientRect().top);cr=cta?.getBoundingClientRect()},{passive:true});
// ===== MOTION-PACK-V70 · parked realtime playhead (single rAF) =====
let playing=false,playStart=0,playFrom=0,playEnd=1,playLoop=0,resumeT=0,heroVis=true,parkT=0;
const canPlay=()=>!rm&&!shot&&cur==='edit'&&!drag&&!glide&&!auto&&heroVis&&!d.hidden;
function startPlay(){if(!canPlay()){playing=false;return}const c=clipOf(pos);playLoop=B[c]+M.snapOff;playEnd=B[c+1]??1;playFrom=Math.min(pos,playEnd-.001);playStart=performance.now();playing=true}
function pausePlay(){playing=false;clearTimeout(resumeT);clearTimeout(parkT)}
function bump(){clearTimeout(resumeT);resumeT=setTimeout(()=>{if(cur==='edit')startPlay()},M.resumeMs)}
new IntersectionObserver(([e])=>{heroVis=e.isIntersecting;if(!heroVis)pausePlay();else if(cur==='edit'&&!auto)bump()}).observe(bay);
listen(d,'visibilitychange',()=>{if(d.hidden)pausePlay();else if(cur==='edit'&&!auto)bump()});
if(!fine){lane.addEventListener('touchstart',pausePlay,{passive:true});lane.addEventListener('touchend',bump,{passive:true})}
// ===== spill: stage steps (cuts) + envelope breathe =====
const spill=byId('spill')||d.createElement('i');let spBase=M.spill.edit,spV=spBase,spFlash=0,spRamp=null;
function spStage(s){spRamp=null;if(rm){spBase=M.spill.edit;return}if(s==='shoot'){spRamp={t0:performance.now()};spBase=M.spill.shoot0}else spBase=M.spill[s]}
let last=performance.now();
function loop(n){const dt=Math.min(.05,(n-last)/1000);last=n;
 if(glide){const k=Math.min(1,(n-glide.t0)/M.snapMs),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;pos=glide.a+(glide.b-glide.a)*e;if(k>=1)glide=null}else if(playing){if(!canPlay())playing=false;else{let v=playFrom+(n-playStart)/1000/M.runtime;if(v>=playEnd){playFrom=playLoop;playStart=n;v=playLoop}/* hard-cut in-chapter loop */tgt=pos=v}}else if(!rm)pos+=(tgt-pos)*M.lerp;
 paintHead();ulTick(n);
 // spill opacity: stage step, SHOOT ramp .08→.14/400ms, EDIT flash frame .30, breathe ±.02 from envelope (fine pointer, EDIT playing)
 if(spRamp){const k=Math.min(1,(n-spRamp.t0)/400);spBase=M.spill.shoot0+(M.spill.shoot-M.spill.shoot0)*k;if(k>=1)spRamp=null}
 {let t=spBase;if(playing&&fine&&!rm){const bi=Math.max(0,Math.min(bars.length-1,Math.round(pos*(bars.length-1))));t+=(ENV[bi]-.5)*2*M.spBreathe;spV+=(t-spV)*M.spLerp}else spV=t;let o=spV;if(spFlash){o=M.spill.flash;spFlash=0}spill.style.opacity=o.toFixed(3);spill.style.transform=`translateX(calc(-50% + ${(tx*M.tiltMax*3*.5).toFixed(1)}px))`}
 // dock progress: hero exit 0→60%
 if(dockOK){dockP=Math.max(0,Math.min(1,(sy-(hr.top))/(hr.h*M.dockEnd)));const p=dockP,fineDock=fine;
  const s=1-(1-M.dockScale)*p,o=p<.75?1:1-(p-.75)/.25;mon.style.setProperty('--ds',s.toFixed(4));mon.style.setProperty('--do',o.toFixed(3));
  mon.style.setProperty('--dx',(fineDock?dockV.x*p:0).toFixed(1)+'px');mon.style.setProperty('--dy',(fineDock?(dockV.ry-(dockV.cyDoc-sy))*p:0).toFixed(1)+'px');
  rh.classList.toggle('docked',p>=1)}
 if(tiltOK){const on=dockP<=0,gx=on?px:0,gy=on?py:0;const ax=M.k*(gx-tx)-M.c*vx,ay=M.k*(gy-ty)-M.c*vy;vx+=ax*dt;vy+=ay*dt;tx+=vx*dt;ty+=vy*dt;
  mon.style.setProperty('--ry',Math.max(-M.tiltCap,Math.min(M.tiltCap,M.tiltBase+tx*M.tiltMax)).toFixed(3)+'deg');mon.style.setProperty('--rx',(-ty*M.tiltMax).toFixed(3)+'deg');
  
  if(seat){seat.style.setProperty('--sx',(tx*M.seatX).toFixed(1)+'px');seat.style.setProperty('--sg',(Math.hypot(tx,ty)/1.41*M.seatG).toFixed(3))}
  const cax=220*(mxT-mx)-22*mvx,cay=220*(myT-my)-22*mvy;mvx+=cax*dt;mvy+=cay*dt;mx+=mvx*dt;my+=mvy*dt;if(cta){cta.style.setProperty('--mx',mx.toFixed(2)+'px');cta.style.setProperty('--my',my.toFixed(2)+'px')}}
 requestAnimationFrame(loop)}
// boot: copy paints first, monitor hydrates after
const forced=q.get('stage');
function boot(){rects();if(forced&&S.includes(forced)){setStage(forced,{announce:false});if(forced==='edit'){flash.classList.remove('f')}}
 else if(rm||shot){setStage('edit',{announce:false});flash.classList.remove('f');if(rm)tgt=pos=B[1]+M.snapOff}
 else{auto=true;mon.classList.add('hy');setStage('script',{announce:false});layers.script.classList.remove('on');
  const run=(t,f)=>timers.push(setTimeout(()=>{if(auto)f()},t));run(M.script,()=>setStage('script',{announce:false}));run(M.shoot,()=>setStage('shoot',{announce:false}));
  run(M.edit,()=>{setStage('edit',{announce:false});auto=false;tgt=pos=M.parkFrom;parkT=setTimeout(startPlay,M.playDelay)});
  ['pointerdown','keydown','wheel'].forEach(ev=>addEventListener(ev,cancelAuto,{passive:true,once:true}));
  listen(d,'visibilitychange',()=>{if(d.hidden&&auto){cancelAuto();setStage('edit',{announce:false})}})}
 if(!auto&&!rm&&!shot&&cur==='edit')parkT=setTimeout(startPlay,M.playDelay);
 requestAnimationFrame(loop)}
d.fonts?.ready.then(()=>requestAnimationFrame(boot))||requestAnimationFrame(boot);
})();


 const top = byId('yt-top');
 const onChrome = () => {
  root.classList.toggle('scrolled', scrollY > 8);
  root.classList.toggle('ondark', !!(top && scrollY < top.offsetHeight - 200));
 };
 addEventListener('scroll', onChrome, {passive: true});
 onChrome();
 return () => {
  dead = true;
  listeners.forEach((fn) => fn());
  timers.forEach((id) => window.clearTimeout(id));
  rafs.forEach((id) => window.cancelAnimationFrame(id));
  ios.forEach((o) => o.disconnect());
 };
}
