const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{const active=link.hash===`#${entry.target.id}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -65% 0px',threshold:0});
sections.forEach(section=>observer.observe(section));
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('egor5000300@gmail.com');status.textContent='Email copied';}catch{status.textContent='Email: egor5000300@gmail.com';}});
