(()=>{
const T=window.I18N;const $=s=>document.querySelector(s);let lang=localStorage.getItem('portfolioLang')||'en';
function tr(k){return (T[lang]&&T[lang][k])||(T.en&&T.en[k])||k}
function apply(l){lang=l;localStorage.setItem('portfolioLang',l);document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';document.querySelectorAll('[data-t]').forEach(e=>e.textContent=tr(e.dataset.t));$('#lang').value=l;}
const lb=$('#lightbox');function light(src,alt){lb.querySelector('img').src=src;lb.querySelector('img').alt=alt||'';lb.showModal()}
document.querySelectorAll('.photo img,.twin img,.reference-strip img,.real-to-twin img,.cases img').forEach(img=>{img.tabIndex=0;img.addEventListener('click',()=>light(img.src,img.alt));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')light(img.src,img.alt)})});
$('#close').onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.open)lb.close()});
$('#lang').onchange=e=>apply(e.target.value);$('#menu').onclick=()=>{const n=$('#nav'),o=n.classList.toggle('open');$('#menu').setAttribute('aria-expanded',o)};document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
apply(lang);
})();
