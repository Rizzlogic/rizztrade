(function(){const T=["zamrud","gading","hitam","biru"],r=document.documentElement;
function saved(){try{const s=JSON.parse(localStorage.getItem("rz_set")||"{}");return s.th||localStorage.getItem("rz_th")||""}catch(e){return""}}
const auto=()=>matchMedia("(prefers-color-scheme:dark)").matches?"zamrud":"gading";
window.RZ={T,apply(t){r.dataset.theme=T.includes(t)?t:auto()},cycle(){const n=T[(T.indexOf(r.dataset.theme)+1)%T.length];try{localStorage.setItem("rz_th",n);const s=JSON.parse(localStorage.getItem("rz_set")||"{}");s.th=n;localStorage.setItem("rz_set",JSON.stringify(s))}catch(e){}this.apply(n)}};
RZ.apply(saved())})();