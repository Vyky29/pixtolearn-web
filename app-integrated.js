const appExperience=document.querySelector(".app-editorial-experience");

const names=['Signature','Studio','Deep blue','Editorial','Product story','Workspace'];const notes=['Equilibrio de marca: visual a la izquierda, funciones conectadas a la derecha.','Navegación lateral: separa claramente las áreas y la personalización.','Azul profundo: presencia de marca y contraste, con el producto iluminado.','Editorial: tipografía protagonista, espacio y composición de producto.','Product story: información primero, visual enmarcado y controles más precisos.','Workspace · Recomendada: navegación unificada, colores por área y una superficie flotante.'];
let version=4,topic=0,area=-1,mode='adult',feature=0;
const products=[['routines','Routines','#ce3862','#faedf0'],['swimming','Swimming','#507f8d','#edf4f5'],['physical','Physical Activity','#bd7029','#fbf0e5'],['voice','My Voice','#7a4e9a','#f2ecf6']];
const adultHome=[['Connect or disconnect products','Turn Routines, Swimming, Physical Activity and My Voice on or off. Only the connected areas show.'],['Create the weekly schedule','Build the week here: routines, workouts and what comes next.'],['Open an area','Make the plan, then leave it ready to follow.']];
const userHome=[['See what is on','Home shows the products that are connected.'],['Follow the week','Open the weekly schedule and see what is planned.'],['Take part','Open a prepared activity and follow it, one step at a time.']];
const adultAreas=[
[['Browse or open a routine','Start from the library or from a routine you have already saved.'],['Make your own','Create a routine and use the Lab for cards that match real moments.'],['Add it to the week','Put the routine on Home, or into the weekly schedule.']],
[['Browse the swimming library','Find water adaptation, floating, strokes, games and the visuals that go with them.'],['Build a session or circuit','Put activities in a sequence, or arrange them as stations.'],['Share the plan','Keep it, then leave the session or circuit ready to follow.']],
[['Find the movement','Browse activities with equipment and without it.'],['Put a plan together','Arrange a session or a circuit in the order you need.'],['Share it','Leave the prepared activities ready to follow.']],
[['Open My Voice','Start from Home, next to the other products.'],['Prepare the words','Choose vocabulary and boards for the person and the situation.'],['Keep it within reach','Leave communication ready alongside the activities you share.']]
];
const userAreas=[
[['Find the routines','Prepared routines show up together here.'],['Follow the next step','Open a routine and stay with the step that is happening now.'],['Move on','Go back to Home, or switch to another connected product.']],
[['See their swimming plans','Shared sessions and circuits appear in Swimming.'],['Start the session','Open the plan and go into Focus Mode.'],['Follow one step','Move through the sequence, with a picture for each part.']],
[['Find what is ready','Sessions and circuits that are ready appear here.'],['Open and take part','Choose the plan and go into the activity.'],['Follow the movement','Use Focus Mode and the step pictures, at your pace.']],
[['A focused space','Pictures and ready phrases stay on screen, ready to choose.'],['Say an everyday need','Quick Talk includes help, a break, more time or a quiet place.'],['Build a message','Choose symbols, use the message strip and play it aloud.']]
];
function render(){
const home=topic===0&&area<0;
const product=home?null:products[Math.max(area,0)];
const accent=home?'#1a3038':product[2];
const tint=home?'#f7f1ea':product[3];
appExperience.style.cssText=`--accent:${accent};--tint:${tint}`;
const areasNav=appExperience.querySelector('.areas');
if(areasNav)areasNav.hidden=true;
appExperience.querySelector('.topics').innerHTML=`<div class="menu-bands"><div class="menu-band"><span class="menu-kicker">Inside the app</span><div class="menu-row" role="tablist" aria-label="Inside the app">${['Home',...products.map(p=>p[1])].map((name,i)=>{const on=i===0?home:topic===0&&area===i-1;const color=i?products[i-1][2]:'';return `<button class="${i?'menu-area':'menu-home'}" ${color?`style="--c:${color}"`:''} role="tab" aria-selected="${on}" onclick="topic=0;area=${i-1};render()">${name}</button>`}).join('')}</div></div><div class="menu-band menu-band-general"><span class="menu-kicker">Across the app</span><div class="menu-row" role="tablist" aria-label="Across the app"><button role="tab" aria-selected="${topic===2}" onclick="topic=2;render()">Languages</button><button role="tab" aria-selected="${topic===3}" onclick="topic=3;render()">Characters</button></div></div></div>`;
if(topic<2){
const adult=mode==='adult';
const entries=home?(adult?adultHome:userHome):(adult?adultAreas[area]:userAreas[area]);
const label=home?'the app':product[1];
const src=home?(adult?'voice-adult-portrait':'child-home-portrait'):`${product[0]}-${mode}-portrait`;
const eyebrow=home?'Home':label;
const title=home?(adult?'Connect the areas.<br>Build the week.':'Open what is ready.<br>Take part.'):(product[1]==='My Voice'?(adult?'Prepare the words.':'A way to be heard.'):(adult?'Prepare this area.':'Follow this area.'));
appExperience.querySelector('.stage').innerHTML=`<div class="visual"><div class="tablet"><img src="assets/current-art/${src}.png" alt="Actual PixtoLearn ${label} ${adult?'prepare':'take part'} screen"></div></div><div class="copy"><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><div class="role" aria-label="Choose the view"><button aria-pressed="${adult}" onclick="mode='adult';render()">Prepare</button><button aria-pressed="${!adult}" onclick="mode='child';render()">Take part</button></div><ul class="view-points">${entries.map(([name,text])=>`<li><strong>${name}</strong><span>${text}</span></li>`).join('')}</ul></div>`;
}else if(topic===2){appExperience.querySelector('.stage').innerHTML=`<div class="alternate"><div class="altcopy"><div class="eyebrow">Across all four areas</div><h2>Familiar pictures.<br>Your language.</h2><p>One language choice, throughout your everyday visual support.</p></div><div class="cards">${['hairdresser','swimming-1-main','physical-1-main','voice-help'].map(k=>`<div class="frame"><iframe title="Original ${k} card" src="assets/current-art/fan-${k}.html"></iframe></div>`).join('')}</div></div>`}else{appExperience.querySelector('.stage').innerHTML=`<div class="alternate"><div class="altcopy"><div class="eyebrow">Representation matters</div><h2>Different people.<br>Shared possibilities.</h2><p>Meet the PixtoLearn characters.</p><label>Preview a skin tone <select onchange="appExperience.querySelector('.cast').src='assets/cast/ensemble-'+this.value+'.png'"><option value="light">Light</option><option value="medium">Medium</option><option value="dark">Dark</option></select></label></div><img class="cast" src="assets/cast/ensemble-light.png" alt="The sixteen PixtoLearn characters"></div>`}
}

