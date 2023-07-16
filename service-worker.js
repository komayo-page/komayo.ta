self.addEventListener('install', (event) => {
event.waitUntil(
caches.open('v1').then((cache) => {
return cache.addAll([
'/',
'/css/pico.classless.min.css',
'/favicon-512x512.png',
'/favicon.svg',
'/manifest.json',
'/komayo-tu-kum-etiriyaip-parttu-cirikki-ar.png',
'/komayo-tu-kum-etiriyaip-parttu-cirikki-ar.webp',
]);
})
);
});
self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});
