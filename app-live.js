const products=[
  {id:'routines', name:'Routines', line:'The steps of the day, in order.', childTitle:'Follow the next step.',
    adult:[
      ['Library','The routines, to browse and open.','library'],
      ['New routine','Name it, then pick the cards.','fresh'],
      ['Lab','The cards you can make. Your photo, in the PixtoLearn look.','lab']
    ],
    child:[
      ['Dashboard','The routines you left ready.','home'],
      ['The routine','The steps, before focus.','session'],
      ['1 step','One picture. What is happening now.','one'],
      ['2 steps','Now, and then.','two'],
      ['3 steps','Now, next, and then.','three']
    ],
    shots:{
      adult:[
        {name:'Library', mark:'library', frame:'portrait', ratio:'780/1640', src:'assets/screens/routines-library-phone.png', alt:'Routines library'},
        {name:'New routine', mark:'fresh', frame:'portrait', ratio:'840/1800', src:'assets/screens/routines-new.png', alt:'Create a routine'},
        {name:'Lab', mark:'lab', frame:'portrait', ratio:'390/844', src:'assets/screens/routines-ai.png', alt:'PixtoLearn AI, ready to draw the toothbrush'}
      ],
      child:[
        {name:'Dashboard', mark:'home', frame:'portrait', ratio:'768/1024', src:'assets/current-art/routines-child-portrait.png', alt:'Routines, when they play'},
        {name:'The routine', mark:'session', frame:'portrait', ratio:'960/2000', src:'assets/screens/routines-before.png', alt:'A routine before focus'},
        {name:'1 step', mark:'one', frame:'portrait', ratio:'804/1748', src:'assets/screens/routines-step.png', alt:'One step in focus'},
        {name:'2 steps', mark:'two', frame:'landscape', ratio:'16/10', src:'assets/screens/routines-focus-2.png', alt:'Two steps in focus'},
        {name:'3 steps', mark:'three', frame:'landscape', ratio:'16/10', src:'assets/screens/focus-brush.png', alt:'Three steps in focus'}
      ]
    }},
  {id:'swimming', name:'Swimming', line:'The session, ready for the water.', childTitle:'Follow the session.',
    adult:[
      ['Library','The folders and your sessions.','library'],
      ['New session','Session or circuit.','fresh'],
      ['Lab','The cards the session can use. Your photo, in the PixtoLearn look.','lab']
    ],
    child:[
      ['Dashboard','The session you left ready.','home'],
      ['Session','The steps, before focus.','session'],
      ['Circuit','The stations, around the water.','circuit'],
      ['2 steps','Now, and then, in focus.','two'],
      ['3 steps','Now, next, and then, in focus.','three']
    ],
    shots:{
      adult:[
        {name:'Library', mark:'library', frame:'portrait', ratio:'780/1640', src:'assets/screens/swimming-library-phone.png', alt:'Swimming library'},
        {name:'New session', mark:'fresh', frame:'portrait', ratio:'780/1598', src:'assets/screens/swim-new.png', alt:'Create a swimming session or circuit'},
        {name:'Lab', mark:'lab', frame:'portrait', ratio:'390/844', src:'assets/screens/swim-ai.png', alt:'PixtoLearn AI, ready to draw the kickboard'}
      ],
      child:[
        {name:'Dashboard', mark:'home', frame:'portrait', ratio:'768/1024', src:'assets/current-art/swimming-child-portrait.png', alt:'Swimming, when they play'},
        {name:'Session', mark:'session', frame:'landscape', ratio:'1280/900', src:'assets/swimming-sequence.png', alt:'A swimming session, before focus'},
        {name:'Circuit', mark:'circuit', frame:'landscape', ratio:'1280/900', src:'assets/swimming-circuit.png', alt:'A swimming circuit'},
        {name:'2 steps', mark:'two', frame:'landscape', ratio:'1280/900', src:'assets/demos/swim-two.png', alt:'Two steps in focus'},
        {name:'3 steps', mark:'three', frame:'landscape', ratio:'1280/900', src:'assets/demos/swim-three.png', alt:'Three steps in focus'}
      ]
    }},
  {id:'physical', name:'Physical Activity', line:'The movement, shown before you do it.', childTitle:'The movement, at your pace.',
    adult:[
      ['Library','The folders and your sessions.','library'],
      ['New session','Session or circuit.','fresh'],
      ['Lab','The cards the movement can use. Your photo, in the PixtoLearn look.','lab']
    ],
    child:[
      ['Dashboard','The session you left ready.','home'],
      ['Session','The movement, before focus.','session'],
      ['Circuit','The stations, in order.','circuit'],
      ['2 steps','Now, and then, in focus.','two'],
      ['3 steps','Now, next, and then, in focus.','three'],
      ['Station','The circuit, one station at a time.','station']
    ],
    shots:{
      adult:[
        {name:'Library', mark:'library', frame:'portrait', ratio:'780/1640', src:'assets/screens/physical-library-phone.png', alt:'Physical activity library'},
        {name:'New session', mark:'fresh', frame:'portrait', ratio:'780/1629', src:'assets/screens/phys-new.png', alt:'Create a physical activity session or circuit'},
        {name:'Lab', mark:'lab', frame:'portrait', ratio:'390/844', src:'assets/screens/phys-ai.png', alt:'PixtoLearn AI, ready to draw the walk'}
      ],
      child:[
        {name:'Dashboard', mark:'home', frame:'portrait', ratio:'768/1024', src:'assets/current-art/physical-child-portrait.png', alt:'Physical activity, when they play'},
        {name:'Session', mark:'session', frame:'landscape', ratio:'16/10', src:'assets/physical.png', alt:'A session, before focus'},
        {name:'Circuit', mark:'circuit', frame:'landscape', ratio:'16/10', src:'assets/physical-circuit.png', alt:'A physical activity circuit'},
        {name:'2 steps', mark:'two', frame:'landscape', ratio:'1280/900', src:'assets/demos/physical-two.png', alt:'Two steps in focus'},
        {name:'3 steps', mark:'three', frame:'landscape', ratio:'1280/900', src:'assets/demos/physical-three.png', alt:'Three steps in focus'},
        {name:'Station', mark:'station', frame:'landscape', ratio:'16/10', src:'assets/screens/phys-station.png', alt:'One station of a physical circuit'}
      ]
    }},
  {id:'voice', name:'My Voice', line:'The words you need, ready to say.', childTitle:'A way to be heard.',
    adult:[['Library','The words, and the worlds they belong to.','library'],['Boards','The set you prepare for a person and a place.','boards'],['Quick Talk','Ready phrases, left within reach.','talk']],
    child:[['Quick Talk','Help, a break, more time, a quiet place.','talk'],['Their board','The words you prepared, ready to choose.','boards'],['A message','Symbols on the strip, then played aloud.','message']]}
];
const MARKS={
  library:'<rect x="2.6" y="4.2" width="5.1" height="15.2" rx="1.15"/><rect x="9.45" y="6.4" width="5.1" height="13" rx="1.15" opacity=".72"/><rect x="16.3" y="3.4" width="5.1" height="16" rx="1.15" opacity=".48"/>',
  fresh:'<rect x="3.1" y="4.4" width="13.2" height="16.2" rx="2.4"/><rect x="5.15" y="6.45" width="9.1" height="8.2" rx="1.3" fill="#FFF8EB"/><path fill="#FFF8EB" d="M8.85 15h3.8v.7H8.85zM9.7 16.15h2.1v1.55H9.7z"/><path fill="#E8A840" d="M18.15 1.7c.16 0 .28.1.32.26l.48 1.7c.04.14.14.24.28.28l1.7.48c.16.04.26.16.26.32s-.1.28-.26.32l-1.7.48a.4.4 0 0 0-.28.28l-.48 1.7c-.04.16-.16.26-.32.26s-.28-.1-.32-.26l-.48-1.7a.4.4 0 0 0-.28-.28l-1.7-.48a.34.34 0 0 1-.26-.32c0-.16.1-.28.26-.32l1.7-.48c.14-.04.24-.14.28-.28l.48-1.7c.04-.16.16-.26.32-.26z"/>',
  lab:'<path d="M12 1.55c.32 0 .56.2.66.52l1.72 6.05c.08.28.3.5.58.58l6.05 1.72c.32.1.52.34.52.66s-.2.56-.52.66l-6.05 1.72a.9.9 0 0 0-.58.58l-1.72 6.05c-.1.32-.34.52-.66.52s-.56-.2-.66-.52l-1.72-6.05a.9.9 0 0 0-.58-.58L3.6 13.14a.7.7 0 0 1-.52-.66c0-.32.2-.56.52-.66l6.05-1.72c.28-.08.5-.3.58-.58L11.34 2.07c.1-.32.34-.52.66-.52z"/><path fill="#E8A840" d="M19.05 2.35c.22 0 .4.14.46.36l.82 2.72c.06.2.22.36.42.42l2.72.82c.22.06.36.24.36.46s-.14.4-.36.46l-2.72.82a.6.6 0 0 0-.42.42l-.82 2.72c-.06.22-.24.36-.46.36s-.4-.14-.46-.36l-.82-2.72a.6.6 0 0 0-.42-.42l-2.72-.82a.47.47 0 0 1-.36-.46c0-.22.14-.4.36-.46l2.72-.82c.2-.06.36-.22.42-.42l.82-2.72c.06-.22.24-.36.46-.36z"/><path fill="#5F8A9A" d="M5.15 15.55c.18 0 .32.12.38.3l.55 1.85c.04.16.16.28.34.34l1.85.55c.18.04.3.2.3.38s-.12.32-.3.38l-1.85.55a.45.45 0 0 0-.34.34l-.55 1.85c-.06.18-.2.3-.38.3s-.32-.12-.38-.3l-.55-1.85a.45.45 0 0 0-.34-.34l-1.85-.55a.38.38 0 0 1-.3-.38c0-.18.12-.32.3-.38l1.85-.55c.16-.04.28-.16.34-.34l.55-1.85c.06-.18.2-.3.38-.3z"/>',
  home:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2" opacity=".72"/><rect x="3" y="13" width="8" height="8" rx="2" opacity=".5"/><rect x="13" y="13" width="8" height="8" rx="2" opacity=".32"/>',
  session:'<rect x="3" y="3.6" width="18" height="4" rx="1.3"/><rect x="3" y="10" width="18" height="4" rx="1.3" opacity=".72"/><rect x="3" y="16.4" width="18" height="4" rx="1.3" opacity=".48"/>',
  circuit:'<circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="4.8" r="2.05"/><circle cx="18.2" cy="15.6" r="2.05"/><circle cx="5.8" cy="15.6" r="2.05"/>',
  one:'<rect x="7" y="3" width="10" height="18" rx="2.2"/>',
  two:'<rect x="2" y="4" width="9" height="16" rx="2"/><rect x="13" y="4" width="9" height="16" rx="2" opacity=".45"/>',
  three:'<rect x="1.2" y="5" width="6.4" height="14" rx="1.6"/><rect x="8.8" y="5" width="6.4" height="14" rx="1.6" opacity=".62"/><rect x="16.4" y="5" width="6.4" height="14" rx="1.6" opacity=".35"/>',
  station:'<circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="4.6" r="2.3"/><circle cx="18.4" cy="15.8" r="1.55" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="5.6" cy="15.8" r="1.55" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  boards:'<rect x="2" y="3.5" width="9" height="17" rx="2"/><rect x="13" y="3.5" width="9" height="17" rx="2" opacity=".5"/>',
  talk:'<path d="M4.2 4.2h12.2a2 2 0 0 1 2 2v6.6a2 2 0 0 1-2 2H10l-3.6 3.2V14.8H4.2a2 2 0 0 1-2-2V6.2a2 2 0 0 1 2-2z"/>',
  message:'<rect x="1.6" y="8" width="4" height="8" rx="1"/><rect x="6.8" y="8" width="4" height="8" rx="1" opacity=".72"/><rect x="12" y="8" width="4" height="8" rx="1" opacity=".45"/><path d="M18.2 8.4v7.2l4.2-3.6z"/>'
};
function glyph(name){
  const body=MARKS[name];
  if(!body) return '';
  return `<svg class="mark" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${body}</svg>`;
}
function screenFor(product){
  if(product.id==='voice') return 'assets/current-art/voice-child-portrait.png';
  return `assets/current-art/${product.id}-adult-portrait.png`;
}
document.querySelectorAll('#meet-the-app [data-app]').forEach((root)=>{
  const locked=root.dataset.product;
  let index=Math.max(0, products.findIndex(p=>p.id===locked));
  let mode='adult';
  let shot=0;
  let timer=0;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;shot=0;paint()}));
  function showShot(list, next){
    const stage=root.querySelector('.shot-stage');
    if(!stage) return;
    shot=(next+list.length)%list.length;
    const wide=list[shot].frame==='landscape';
    stage.classList.toggle('is-portrait', !wide);
    stage.classList.toggle('is-landscape', wide);
    const screen=stage.querySelector('.shot-screen');
    if(screen && list[shot].ratio) screen.style.setProperty('--shot', list[shot].ratio);
    stage.querySelectorAll('img').forEach((img,i)=>{
      const on=i===shot;
      img.classList.toggle('is-on', on);
      img.setAttribute('aria-hidden', on?'false':'true');
    });
    const here=list[shot].at==null?shot:list[shot].at;
    stage.querySelectorAll('[data-shot]').forEach((dot)=>{
      const i=Number(dot.dataset.shot);
      const row=list[i].at==null?i:list[i].at;
      dot.setAttribute('aria-pressed', String(row===here));
    });
    root.querySelectorAll('[data-points] li').forEach((li,i)=>li.classList.toggle('is-on', i===here));
  }
  function stop(){window.clearInterval(timer);timer=0}
  function start(list){
    stop();
    if(reduce||list.length<2) return;
    timer=window.setInterval(()=>showShot(list, shot+1), 3200);
  }
  function paint(){
    const product=products[index];
    const adult=mode==='adult';
    const points=adult?product.adult:product.child;
    const list=product.shots?product.shots[adult?'adult':'child']:[];
    const visual=root.querySelector('.visual');
    if(list.length){
      const wide=list[shot].frame==='landscape';
      const here=list[shot].at==null?shot:list[shot].at;
      visual.innerHTML=`<div class="shot-stage ${wide?'is-landscape':'is-portrait'}"><div class="shot-ipad"><div class="shot-screen" style="--shot:${list[shot].ratio}">${list.map((s,i)=>`<img alt="${s.alt}" src="${s.src}" class="${s.ratio==='768/1024'?'is-board ':''}${i===shot?'is-on':''}" ${i===shot?'':'aria-hidden="true"'}>`).join('')}</div></div><div class="shot-dots" role="tablist">${list.map((s,i)=>s.hide?'':`<button type="button" data-shot="${i}" aria-pressed="${(s.at==null?i:s.at)===here}">${glyph(s.mark)}${s.name}</button>`).join('')}</div></div>`;
      visual.querySelectorAll('[data-shot]').forEach((dot,i)=>dot.addEventListener('click',()=>{showShot(list,i);start(list)}));
      const stage=visual.querySelector('.shot-stage');
      stage.addEventListener('mouseenter', stop);
      stage.addEventListener('mouseleave', ()=>start(list));
      start(list);
    }else{
      stop();
      const img=visual.querySelector('[data-screen]');
      if(img){img.src=screenFor(product);img.alt=`PixtoLearn ${product.name}`}
    }
    root.querySelector('[data-title]').textContent=`${product.name}. ${adult?product.line:product.childTitle}`;
    const here=list[shot]? (list[shot].at==null?shot:list[shot].at) : shot;
    root.querySelector('[data-points]').innerHTML=points.map(([n,t,mark],i)=>`<li class="${list.length&&i===here?'is-on':''}"><strong>${glyph(mark)}${n}</strong><span>${t}</span></li>`).join('');
    root.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.mode===mode)));
  }
  paint();
});
const stories={
  home:{
    modes:{
      adult:{
        line:'You choose what is on, and leave it ready.',
        shots:[{name:'Plan', frame:'landscape', ratio:'1100/760', src:'assets/current-art/adult-home.png', alt:'Home, the plan'}],
        points:[
          ['The week','The day is on. You edit what belongs to it.'],
          ['The products','Routines, swimming, movement, and My Voice. Each one on or off.'],
          ['The words','Core vocabulary, left within reach.']
        ]
      },
      child:{
        line:'Their turn. The pictures you left.',
        shots:[{name:'Play', frame:'portrait', ratio:'768/1024', src:'assets/current-art/child-home-portrait.png', alt:'Home, when they play'}],
        points:[
          ['Their week','Bathroom, pool, park, home. The places of the day.'],
          ['The words','How they feel, and the words you left.'],
          ['The products','The ones you switched on, along the bottom.']
        ]
      }
    }
  }
};
function mountStory(root, spec){
  let mode='adult';
  let shot=0;
  let timer=0;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;shot=0;paint()}));
  function current(){return spec.modes[mode]}
  function showShot(list, next){
    const stage=root.querySelector('.shot-stage');
    if(!stage) return;
    shot=(next+list.length)%list.length;
    const wide=spec.same || list[shot].frame==='landscape';
    stage.classList.toggle('is-portrait', !wide);
    stage.classList.toggle('is-landscape', wide);
    stage.classList.toggle('is-same', Boolean(spec.same));
    const screen=stage.querySelector('.shot-screen');
    if(screen && list[shot].ratio) screen.style.setProperty('--shot', list[shot].ratio);
    stage.querySelectorAll('img').forEach((img,i)=>{
      const on=i===shot;
      img.classList.toggle('is-on', on);
      img.setAttribute('aria-hidden', on?'false':'true');
    });
    stage.querySelectorAll('[data-shot]').forEach((dot,i)=>dot.setAttribute('aria-pressed', String(i===shot)));
    const light=list.length>1;
    root.querySelectorAll('[data-points] li').forEach((li,i)=>li.classList.toggle('is-on', light && i===shot));
  }
  function stop(){window.clearInterval(timer);timer=0}
  function start(list){
    stop();
    if(reduce||list.length<2) return;
    timer=window.setInterval(()=>showShot(list, shot+1), 3200);
  }
  function paint(){
    const view=current();
    const list=view.shots;
    const visual=root.querySelector('.visual');
    const wide=spec.same || list[shot].frame==='landscape';
    const dots=list.length>1?`<div class="shot-dots" role="tablist">${list.map((s,i)=>`<button type="button" data-shot="${i}" aria-pressed="${i===shot}">${s.name}</button>`).join('')}</div>`:'';
    visual.innerHTML=`<div class="shot-stage ${wide?'is-landscape':'is-portrait'}${spec.same?' is-same':''}"><div class="shot-ipad"><div class="shot-screen" style="--shot:${list[shot].ratio}">${list.map((s,i)=>`<img alt="${s.alt}" src="${s.src}" class="${s.ratio==='768/1024'?'is-board ':''}${i===shot?'is-on':''}" ${i===shot?'':'aria-hidden="true"'}>`).join('')}</div></div>${dots}</div>`;
    visual.querySelectorAll('[data-shot]').forEach((dot,i)=>dot.addEventListener('click',()=>{showShot(list,i);start(list)}));
    const stage=visual.querySelector('.shot-stage');
    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', ()=>start(list));
    const light=list.length>1;
    root.querySelector('[data-points]').innerHTML=view.points.map(([n,t],i)=>`<li class="${light&&i===shot?'is-on':''}"><strong>${n}</strong><span>${t}</span></li>`).join('');
    const title=root.querySelector('[data-title]');
    if(title && view.line) title.textContent=view.line;
    root.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.mode===mode)));
    start(list);
  }
  paint();
}
const homeReel=document.querySelector('#meet-the-app [data-home]');
if(homeReel) mountStory(homeReel, stories.home);
const castNames=[['Dani','Ari','Noor','Mika','Zuri','Vega','Nia','Lía'],['Alex','Sam','Robin','Sol','Aman','Eli','Leo','Hugo']];
function mountCast(host){
  host.innerHTML=`<section class="cast-showcase"><div class="cast-showcase-heading"><div><span class="eyebrow">The PixtoLearn characters</span><h2>Different people.<br><em>Everyone belongs.</em></h2></div><p>Sixteen familiar characters, across everyday activities. Choose a skin tone or see a mix together.</p></div><div class="cast-controls"><div class="cast-group"><button type="button" data-cast-group="0" aria-pressed="true">Girls <small>8</small></button><button type="button" data-cast-group="1" aria-pressed="false">Boys <small>8</small></button></div><div class="cast-swatches"><button type="button" data-cast-tone="light" aria-pressed="false"><i style="background:#edc4a4"></i><span>Light</span></button><button type="button" data-cast-tone="medium" aria-pressed="false"><i style="background:#b7784b"></i><span>Medium</span></button><button type="button" data-cast-tone="dark" aria-pressed="false"><i style="background:#70442f"></i><span>Dark</span></button><button type="button" data-cast-tone="mixed" aria-pressed="true"><i style="background:conic-gradient(#edc4a4 0 120deg,#b7784b 120deg 240deg,#70442f 240deg)"></i><span>Mix</span></button></div></div><div class="cast-portrait-grid"></div><p class="cast-status"></p></section>`;
  const grid=host.querySelector('.cast-portrait-grid');
  const status=host.querySelector('.cast-status');
  let group=0, tone='mixed';
  function paint(){
    grid.innerHTML=castNames[group].map((name,i)=>{
      const skin=tone==='mixed'?['light','medium','dark'][(i+group)%3]:tone;
      const x=[114,374,630,889,1145,1404,1660,1924][i]-82;
      const y=group?350:32;
      return `<figure><svg viewBox="${x} ${y} 164 260" role="img" aria-label="${name}"><image href="assets/cast/ensemble-${skin}.png" width="2048" height="684"/></svg><figcaption>${name}</figcaption></figure>`;
    }).join('');
    status.textContent=`${group?'Boys':'Girls'} · ${tone==='mixed'?'Mixed skin tones':tone+' skin tone'} · 8 of 16 characters`;
    host.querySelectorAll('[data-cast-group]').forEach(b=>b.setAttribute('aria-pressed', String(+b.dataset.castGroup===group)));
    host.querySelectorAll('[data-cast-tone]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.castTone===tone)));
  }
  host.querySelectorAll('[data-cast-group]').forEach(b=>b.addEventListener('click',()=>{group=+b.dataset.castGroup;paint()}));
  host.querySelectorAll('[data-cast-tone]').forEach(b=>b.addEventListener('click',()=>{tone=b.dataset.castTone;paint()}));
  paint();
}
document.querySelectorAll('#meet-the-app [data-cast]').forEach((host)=>{
  const details=host.closest('details');
  const go=()=>mountCast(host);
  if(!details || details.open) go();
  else details.addEventListener('toggle', ()=>{ if(details.open && !host.childElementCount) go(); });
});
const categories={en:['hairdresser','at the dentist','brushing teeth','washing hands','aquatic breathing','floating & balance','streamlining','front crawl','walk','lower body','ball','copy','My Voice','My Voice','My Voice','My Voice'],es:['peluquería','en el dentista','lavarse los dientes','lavarse las manos','respiración acuática','flotación y equilibrio','posición hidrodinámica','crol','caminar','tren inferior','pelota','imitar','Mi voz','Mi voz','Mi voz','Mi voz'],fr:['coiffeur','chez le dentiste','se brosser les dents','se laver les mains','respiration aquatique','flottaison et équilibre','position profilée','crawl','marcher','bas du corps','ballon','imiter','Ma voix','Ma voix','Ma voix','Ma voix'],it:['parrucchiere','dal dentista','lavarsi i denti','lavarsi le mani','respirazione acquatica','galleggiamento ed equilibrio','posizione idrodinamica','stile libero','camminare','parte inferiore','palla','imitare','La mia voce','La mia voce','La mia voce','La mia voce'],pt:['cabeleireiro','no dentista','lavar os dentes','lavar as mãos','respiração aquática','flutuação e equilíbrio','posição hidrodinâmica','crawl','andar','parte inferior','bola','imitar','A minha voz','A minha voz','A minha voz','A minha voz'],de:['Friseur','beim Zahnarzt','Zähne putzen','Hände waschen','Atmung im Wasser','Treiben und Gleichgewicht','stromlinienförmige Haltung','Kraulschwimmen','Gehen','Unterkörper','Ball','Nachmachen','Meine Stimme','Meine Stimme','Meine Stimme','Meine Stimme']};
let labels;
function paintFrame(frame, lang){
  if(!labels) return;
  const doc=frame.contentDocument; if(!doc) return;
  const i=+frame.dataset.languageCard;
  const title=doc.querySelector('article p');
  if(title) title.textContent=labels[lang][i];
  const footer=doc.querySelector('footer span');
  if(footer) footer.textContent=categories[lang][i];
}
function paintLang(root){
  if(!labels) return;
  const lang=root.querySelector('[data-language]').value;
  root.querySelectorAll('[data-language-card]').forEach((frame)=>paintFrame(frame, lang));
  const line=root.querySelector('[data-word-line]');
  if(line) line.textContent=[2,5,8,12].map(i=>labels[lang][i]).join('  ·  ');
}
function paintPairs(){
  document.querySelectorAll('#meet-the-app .pair [data-language-card]').forEach((frame)=>paintFrame(frame, 'en'));
}
document.querySelectorAll('#meet-the-app [data-lang]').forEach((root)=>{
  root.querySelector('[data-language]').addEventListener('change', ()=>paintLang(root));
  root.querySelectorAll('iframe').forEach(frame=>frame.addEventListener('load', ()=>paintLang(root)));
});
document.querySelectorAll('#meet-the-app .pair iframe').forEach(frame=>frame.addEventListener('load', paintPairs));
fetch('language-preview-labels.json').then(r=>r.json()).then(v=>{labels=v;document.querySelectorAll('#meet-the-app [data-lang]').forEach(paintLang);paintPairs()});
const productIds=['routines','swimming','physical','voice'];
function openFromHash(){
  const id=location.hash.replace('#','');
  if(!id) return;
  if(productIds.includes(id)){
    document.querySelectorAll('#meet-the-app .fold.brand').forEach(d=>{d.open=d.id===id});
  }
  const el=document.getElementById(id);
  if(!el) return;
  if(el.tagName==='DETAILS') el.open=true;
  el.scrollIntoView({block:'start'});
}
window.addEventListener('hashchange', openFromHash);
if(location.hash) openFromHash();
(function(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var sets={
    routines:[
      ["assets/studio-fan/r01-obj.jpg?v=card1","Preparing cereal","assets/studio-fan/r01-step.jpg?v=card1","Preparing cereal"],
      ["assets/studio-fan/r02-obj.jpg?v=card1","Making a sandwich","assets/studio-fan/r02-step.jpg?v=card1","Making a sandwich"],
      ["assets/studio-fan/r03-obj.jpg?v=card1","Going to the zoo","assets/studio-fan/r03-step.jpg?v=card1","Going to the zoo"],
      ["assets/studio-fan/r04-obj.jpg?v=card1","Washing hands","assets/studio-fan/r04-step.jpg?v=card1","Washing hands"],
      ["assets/studio-fan/r05-obj.jpg?v=card1","Brushing teeth","assets/studio-fan/r05-step.jpg?v=card1","Brushing teeth"],
      ["assets/studio-fan/r06-obj.jpg?v=card1","Using the toilet","assets/studio-fan/r06-step.jpg?v=card1","Using the toilet"],
      ["assets/studio-fan/r07-obj.jpg?v=card1","Shower","assets/studio-fan/r07-step.jpg?v=card1","Shower"],
      ["assets/studio-fan/r08-obj.jpg?v=card1","Getting dressed","assets/studio-fan/r08-step.jpg?v=card1","Getting dressed"],
      ["assets/studio-fan/r09-obj.jpg?v=card1","Making toast","assets/studio-fan/r09-step.jpg?v=card1","Making toast"],
      ["assets/studio-fan/r10-obj.jpg?v=card1","Going to the supermarket","assets/studio-fan/r10-step.jpg?v=card1","Going to the supermarket"],
      ["assets/studio-fan/r11-obj.jpg?v=card1","Going to the dentist","assets/studio-fan/r11-step.jpg?v=card1","Going to the dentist"],
      ["assets/studio-fan/r12-obj.jpg?v=card1","Going by bus","assets/studio-fan/r12-step.jpg?v=card1","Going by bus"],
      ["assets/studio-fan/r13-obj.jpg?v=card1","Staying at a hotel","assets/studio-fan/r13-step.jpg?v=card1","Staying at a hotel"],
      ["assets/studio-fan/r14-obj.jpg?v=card1","Going to the aquarium","assets/studio-fan/r14-step.jpg?v=card1","Going to the aquarium"],
      ["assets/studio-fan/r15-obj.jpg?v=card1","Doing the laundry","assets/studio-fan/r15-step.jpg?v=card1","Doing the laundry"],
      ["assets/studio-fan/r16-obj.jpg?v=card1","Getting ready for bed","assets/studio-fan/r16-step.jpg?v=card1","Getting ready for bed"],
      ["assets/studio-fan/r17-obj.jpg?v=card1","Having a haircut","assets/studio-fan/r17-step.jpg?v=card1","Having a haircut"],
      ["assets/studio-fan/r18-obj.jpg?v=card1","Crossing the road","assets/studio-fan/r18-step.jpg?v=card1","Crossing the road"],
      ["assets/studio-fan/r19-obj.jpg?v=card1","Making a smoothie","assets/studio-fan/r19-step.jpg?v=card1","Making a smoothie"],
      ["assets/studio-fan/r20-obj.jpg?v=card1","Eating lunch at school","assets/studio-fan/r20-step.jpg?v=card1","Eating lunch at school"],
    ],
    swimming:[
      ["assets/studio-fan/s01-main.jpg?v=card1","wash your face","assets/studio-fan/s01-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s02-main.jpg?v=card1","sitting safety entry","assets/studio-fan/s02-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s03-main.jpg?v=card1","splash","assets/studio-fan/s03-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s04-main.jpg?v=card1","float on back","assets/studio-fan/s04-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s05-main.jpg?v=card1","roll back to front","assets/studio-fan/s05-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s06-main.jpg?v=card1","shout & sign for help","assets/studio-fan/s06-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s07-main.jpg?v=card1","front crawl kick","assets/studio-fan/s07-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s08-main.jpg?v=card1","backstroke kick","assets/studio-fan/s08-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s09-main.jpg?v=card1","breaststroke kick on front","assets/studio-fan/s09-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s10-main.jpg?v=card1","dolphin kick","assets/studio-fan/s10-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s11-main.jpg?v=card1","sitting dive","assets/studio-fan/s11-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s12-main.jpg?v=card1","sorting balls","assets/studio-fan/s12-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s13-main.jpg?v=card1","swimming costume on","assets/studio-fan/s13-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s14-main.jpg?v=card1","pouring water","assets/studio-fan/s14-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s15-main.jpg?v=card1","hold breath","assets/studio-fan/s15-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s16-main.jpg?v=card1","blow out","assets/studio-fan/s16-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s17-main.jpg?v=card1","hum","assets/studio-fan/s17-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s18-main.jpg?v=card1","blow toy away","assets/studio-fan/s18-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s19-main.jpg?v=card1","blow bubbles with pop tube","assets/studio-fan/s19-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/s20-main.jpg?v=card1","face in the water","assets/studio-fan/s20-step.jpg?v=card1","Break it down"],
    ],
    physical:[
      ["assets/studio-fan/p01-main.jpg?v=card1","Walk forward","assets/studio-fan/p01-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p02-main.jpg?v=card1","Glute bridge","assets/studio-fan/p02-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p03-main.jpg?v=card1","Walk backwards","assets/studio-fan/p03-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p04-main.jpg?v=card1","March on the spot","assets/studio-fan/p04-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p05-main.jpg?v=card1","Side step","assets/studio-fan/p05-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p06-main.jpg?v=card1","Sit steady on the ball","assets/studio-fan/p06-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p07-main.jpg?v=card1","Squat","assets/studio-fan/p07-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p08-main.jpg?v=card1","Vertical jump","assets/studio-fan/p08-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p09-main.jpg?v=card1","Step in and out of a hoop","assets/studio-fan/p09-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p10-main.jpg?v=card1","Zigzag through cones","assets/studio-fan/p10-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p11-main.jpg?v=card1","Hand to opposite knee","assets/studio-fan/p11-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p12-main.jpg?v=card1","Alternating heel taps","assets/studio-fan/p12-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p13-main.jpg?v=card1","Balance on one foot","assets/studio-fan/p13-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p14-main.jpg?v=card1","Roll the ball","assets/studio-fan/p14-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p15-main.jpg?v=card1","Side jump","assets/studio-fan/p15-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p16-main.jpg?v=card1","Turn around","assets/studio-fan/p16-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p17-main.jpg?v=card1","Heel raise","assets/studio-fan/p17-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p18-main.jpg?v=card1","Bird dog","assets/studio-fan/p18-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p19-main.jpg?v=card1","Shoulder circles","assets/studio-fan/p19-step.jpg?v=card1","Break it down"],
      ["assets/studio-fan/p20-main.jpg?v=card1","Cat and neutral","assets/studio-fan/p20-step.jpg?v=card1","Break it down"],
    ]
  };
  Object.keys(sets).forEach(function(name){
    var pair=document.querySelector('#meet-the-app [data-fan="'+name+'"]');
    if(!pair) return;
    var imgs=pair.querySelectorAll("img");
    var index=0;
    window.setInterval(function(){
      index=(index+1)%sets[name].length;
      var next=sets[name][index];
      imgs.forEach(function(img){img.style.opacity="0"});
      window.setTimeout(function(){
        imgs[0].src=next[0]; imgs[0].alt=next[1];
        imgs[1].src=next[2]; imgs[1].alt=next[3];
        imgs.forEach(function(img){img.style.opacity="1"});
      },320);
    },3000);
  });
})();
