'use client';
import {useState} from 'react';
import {Play} from 'lucide-react';

/** Privacy-friendly embed: shows a static thumbnail and only loads youtube-nocookie after a click. */
export function LiteYouTube({id,title}:{id:string;title:string}){
 const [on,setOn]=useState(false);
 return <div className="wl-yt">
  {on
   ?<iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"/>
   :<button type="button" onClick={()=>setOn(true)} aria-label={`Play video: ${title}`}>
     <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" width={480} height={360}/>
     <span className="wl-yt-play" aria-hidden="true"><Play size={26}/></span>
    </button>}
  <noscript><a className="wl-yt-fallback" href={`https://www.youtube.com/watch?v=${id}`}>Watch on YouTube</a></noscript>
 </div>;
}
