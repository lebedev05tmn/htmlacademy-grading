var i=(e,o)=>{e.forEach((n,s)=>n.addEventListener("click",()=>{let r=o==="next"?t[s+1]:t[s-1];r&&(t[s].classList.add("hidden"),r.classList.remove("hidden"))}))},u=e=>{e.forEach((o,n)=>{o.classList.length===1&&o.addEventListener("click",()=>{t.forEach(s=>s.classList.add("hidden")),t[n].classList.remove("hidden")})})},t=document.querySelectorAll(".slider"),m=[...t].map(e=>e.querySelector(".slider__next-button")),p=[...t].map(e=>e.querySelector(".slider__previous-button")),y=[...t].map(e=>e.querySelector(".steps"));i(m,"next");i(p,"prev");y.forEach(e=>{u([...e.children])});var a=L.map("map",{zoomControl:!1,attributionControl:!1}).setView([59.968322,30.317359],16);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(a);var h=L.icon({iconUrl:"../images/icons/pin.svg",iconSize:[38,50]}),k=L.marker([59.968322,30.317359],{icon:h}).addTo(a);var l=document.querySelector(".menu__burger"),c=document.querySelector(".menu__close"),d=document.querySelector(".menu__burger-list");l.addEventListener("click",()=>{d.style.display="flex",l.style.display="none",c.style.display="block"});c.addEventListener("click",()=>{d.style.display="none",c.style.display="none",l.style.display="block"});
