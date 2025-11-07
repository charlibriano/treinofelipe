self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('corrida-felipe-v383').then(c=>c.addAll([
    './corrida_felipe_v383.html','./corrida_felipe_manifest.json'
  ])));
});
self.addEventListener('fetch',(e)=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
