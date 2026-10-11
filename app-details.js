(()=>{
 const buttons=[...document.querySelectorAll('[data-slide]')];
 const panels=[...document.querySelectorAll('.area-detail')];
 document.querySelector('#autoplay')?.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-expanded','false'));panels.forEach(p=>p.hidden=true)});
 buttons.forEach((button,index)=>button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')!=='true';
  buttons.forEach((b,i)=>b.setAttribute('aria-expanded',String(open&&i===index)));
  panels.forEach((panel,i)=>panel.hidden=!(open&&i===index));
 }));
})();
