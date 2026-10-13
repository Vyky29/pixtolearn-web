const editorialCategories={en:['hairdresser','at the dentist','brushing teeth','washing hands','aquatic breathing','floating & balance','streamlining','front crawl','walk','lower body','ball','copy','My Voice','My Voice','My Voice','My Voice'],es:['peluquería','en el dentista','lavarse los dientes','lavarse las manos','respiración acuática','flotación y equilibrio','posición hidrodinámica','crol','caminar','tren inferior','pelota','imitar','Mi voz','Mi voz','Mi voz','Mi voz'],fr:['coiffeur','chez le dentiste','se brosser les dents','se laver les mains','respiration aquatique','flottaison et équilibre','position profilée','crawl','marcher','bas du corps','ballon','imiter','Ma voix','Ma voix','Ma voix','Ma voix'],it:['parrucchiere','dal dentista','lavarsi i denti','lavarsi le mani','respirazione acquatica','galleggiamento ed equilibrio','posizione idrodinamica','stile libero','camminare','parte inferiore','palla','imitare','La mia voce','La mia voce','La mia voce','La mia voce'],pt:['cabeleireiro','no dentista','lavar os dentes','lavar as mãos','respiração aquática','flutuação e equilíbrio','posição hidrodinâmica','crawl','andar','parte inferior','bola','imitar','A minha voz','A minha voz','A minha voz','A minha voz'],de:['Friseur','beim Zahnarzt','Zähne putzen','Hände waschen','Atmung im Wasser','Treiben und Gleichgewicht','stromlinienförmige Haltung','Kraulschwimmen','Gehen','Unterkörper','Ball','Nachmachen','Meine Stimme','Meine Stimme','Meine Stimme','Meine Stimme']};
let selectedLanguage='en',languageLabels;
function translateFans(){
  document.querySelectorAll('[data-language-card]').forEach(frame=>{
    const i=+frame.dataset.languageCard,doc=frame.contentDocument;
    if(!doc||!languageLabels)return;
    const label=languageLabels[selectedLanguage][i];
    const title=doc.querySelector('article p');
    if(title)title.textContent=label;
    const footer=doc.querySelector('footer span');
    if(footer)footer.textContent=editorialCategories[selectedLanguage][i];
    doc.documentElement.lang=selectedLanguage;
    frame.title=label;
  });
  const line=document.querySelector('#word-line');
  if(line&&languageLabels){
    const words=[2,5,8,12].map(i=>languageLabels[selectedLanguage][i]);
    line.textContent=words.join('  ·  ');
  }
}
const languageSelect=document.querySelector('#editorial-language');
if(languageSelect){
  languageSelect.addEventListener('change',()=>{selectedLanguage=languageSelect.value;translateFans()});
  document.querySelectorAll('[data-language-card]').forEach(frame=>frame.addEventListener('load',translateFans));
  fetch('language-preview-labels.json').then(r=>r.json()).then(v=>{languageLabels=v;translateFans()});
}

const castNames=[['Dani','Ari','Noor','Mika','Zuri','Vega','Nia','Lía'],['Alex','Sam','Robin','Sol','Aman','Eli','Leo','Hugo']];
const castGrid=document.querySelector('#cast-grid');
let castGroup=0, castTone='mixed';
function paintCast(){
  if(!castGrid) return;
  castGrid.innerHTML=castNames[castGroup].map((name,i)=>{
    const tone=castTone==='mixed'?['light','medium','dark'][(i+castGroup)%3]:castTone;
    const x=[114,374,630,889,1145,1404,1660,1924][i]-82;
    const y=castGroup?350:32;
    return `<figure><svg viewBox="${x} ${y} 164 260" role="img" aria-label="${name}, ${tone} skin tone" preserveAspectRatio="xMidYMid meet"><image href="assets/cast/ensemble-${tone}.png" width="2048" height="684" preserveAspectRatio="none"/></svg><figcaption>${name}</figcaption></figure>`;
  }).join('');
  const status=document.querySelector('#cast-status');
  if(status) status.textContent=`${castGroup?'Boys':'Girls'} · ${castTone==='mixed'?'Mixed skin tones':castTone[0].toUpperCase()+castTone.slice(1)+' skin tone'} · 8 of 16 characters`;
  document.querySelectorAll('[data-cast-group]').forEach(button=>button.setAttribute('aria-pressed', String(+button.dataset.castGroup===castGroup)));
  document.querySelectorAll('[data-cast-tone]').forEach(button=>button.setAttribute('aria-pressed', String(button.dataset.castTone===castTone)));
}
if(castGrid){
  document.querySelectorAll('[data-cast-group]').forEach(button=>button.addEventListener('click',()=>{castGroup=+button.dataset.castGroup;paintCast()}));
  document.querySelectorAll('[data-cast-tone]').forEach(button=>button.addEventListener('click',()=>{castTone=button.dataset.castTone;paintCast()}));
  paintCast();
}

const products=[
  {id:'routines', name:'Routines', line:'The steps of the day, in order.', accent:'#ce3862', tint:'#faedf0', adultTitle:'The steps of the day, in order.', childTitle:'Follow the next step.',
    adult:[['Browse or open a routine','Start from the library or from a routine you have already saved.'],['Make your own','Create a routine and use the Lab for cards that match real moments.'],['Add it to the week','Put the routine on Home, or into the weekly schedule.']],
    child:[['Find the routines','Prepared routines show up together here.'],['Follow the next step','Open a routine and stay with the step that is happening now.'],['Move on','Go back to Home, or switch to another connected product.']]},
  {id:'swimming', name:'Swimming', line:'The session, ready for the water.', accent:'#507f8d', tint:'#edf4f5', adultTitle:'The session, ready for the water.', childTitle:'One picture at a time.',
    adult:[['Browse the swimming library','Find water adaptation, floating, strokes, games and the visuals that go with them.'],['Build a session or circuit','Put activities in a sequence, or arrange them as stations.'],['Share the plan','Keep it, then leave the session or circuit ready to follow.']],
    child:[['See their swimming plans','Shared sessions and circuits appear in Swimming.'],['Start the session','Open the plan and go into Focus Mode.'],['Follow one step','Move through the sequence, with a picture for each part.']]},
  {id:'physical', name:'Physical Activity', line:'The movement, shown before you do it.', accent:'#bd7029', tint:'#fbf0e5', adultTitle:'The movement, shown before you do it.', childTitle:'The movement, at your pace.',
    adult:[['Find the movement','Browse activities with equipment and without it.'],['Put a plan together','Arrange a session or a circuit in the order you need.'],['Share it','Leave the prepared activities ready to follow.']],
    child:[['Find what is ready','Sessions and circuits that are ready appear here.'],['Open and take part','Choose the plan and go into the activity.'],['Follow the movement','Use Focus Mode and the step pictures, at your pace.']]},
  {id:'voice', name:'My Voice', line:'The words you need, ready to say.', accent:'#7a4e9a', tint:'#f2ecf6', adultTitle:'The words you need, ready to say.', childTitle:'A way to be heard.',
    adult:[['Open My Voice','Start from Home, next to the other products.'],['Prepare the words','Choose vocabulary and boards for the person and the situation.'],['Keep it within reach','Leave communication ready alongside the activities you share.']],
    child:[['A focused space','Pictures and ready phrases stay on screen, ready to choose.'],['Say an everyday need','Quick Talk includes help, a break, more time or a quiet place.'],['Build a message','Choose symbols, use the message strip and play it aloud.']]}
];
const picker=document.querySelector('#product-picker');
let productIndex=0, productMode='adult';
function paintProduct(){
  const product=products[productIndex];
  const adult=productMode==='adult';
  const stage=document.querySelector('#areas');
  stage.style.setProperty('--accent', product.accent);
  stage.style.setProperty('--tint', product.tint);
  const screen=document.querySelector('#product-screen');
  screen.src=`assets/current-art/${product.id}-${adult?'adult':'child'}-portrait.png`;
  screen.alt=`PixtoLearn ${product.name}, ${adult?'prepare':'take part'}`;
  document.querySelector('#product-title').textContent=`${product.name}. ${adult?product.line:product.childTitle}`;
  document.querySelector('#product-points').innerHTML=(adult?product.adult:product.child).map(([name,text])=>`<li><strong>${name}</strong><span>${text}</span></li>`).join('');
  picker.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-pressed', String(i===productIndex)));
  document.querySelectorAll('[data-product-mode]').forEach(button=>button.setAttribute('aria-pressed', String(button.dataset.productMode===productMode)));
}
if(picker){
  picker.innerHTML=products.map((product,i)=>`<button type="button" role="tab" class="menu-area" id="${product.id}" style="--c:${product.accent}" aria-pressed="${i===0}"><b>${product.name}</b><span>${product.line}</span></button>`).join('');
  picker.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>{productIndex=i;paintProduct()}));
  document.querySelectorAll('[data-product-mode]').forEach(button=>button.addEventListener('click',()=>{productMode=button.dataset.productMode;paintProduct()}));
  const hash=location.hash.slice(1);
  const fromHash=products.findIndex(product=>product.id===hash);
  if(fromHash>=0) productIndex=fromHash;
  paintProduct();
  if(fromHash>=0) document.getElementById('areas').scrollIntoView();
}
