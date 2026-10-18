(function(){const r=document.documentElement;
const P=[["index.html","Beranda"],["belajar.html","Belajar"],["alat.html","Alat"],["demo.html","Demo"],["jurnal.html","Jurnal"]],c=location.pathname.split("/").pop()||"index.html";
const h=document.createElement("header");h.innerHTML='<div class="w"><a class="logo" href="index.html" style="text-decoration:none;color:inherit">RIZZ<i>TRADE</i></a><nav>'+P.map(([u,n])=>'<a href="'+u+'"'+(u===c||(c==="index.html"&&u==="index.html")?' class="cur"':"")+">"+n+"</a>").join("")+'</nav><div class="hr"><div class="pill"><span class="dot" id="dot"></span><span id="mk">…</span></div><button class="ic" id="th" aria-label="Ganti tema terang atau gelap">◐</button></div></div>';
document.body.prepend(h);
document.getElementById("th").onclick=()=>RZ.cycle();
function mk(){const n=new Date(),m=n.getUTCDay()*1440+n.getUTCHours()*60+n.getUTCMinutes(),O=1320,C=8460,op=m>=O&&m<C,mins=op?C-m:(m>=C?10080-m+O:O-m),k=Math.floor(mins/60),x=k>=24?Math.floor(k/24)+" hari "+k%24+" jam":k+" jam "+mins%60+" menit";
document.getElementById("mk").textContent=op?"Pasar buka · tutup "+x:"Pasar tutup · buka "+x;document.getElementById("dot").className="dot"+(op?" on":"")}
mk();setInterval(mk,30000)})();