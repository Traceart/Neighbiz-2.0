# Code Citations

## License: MIT
https://github.com/only-cliches/Nano-SQL/tree/af74705e3fc4be6e65c0e4044f7dc7c5b745886c/website/src/.vuepress/public/manifest.webmanifest

```
: "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image
```


## License: unknown
https://github.com/amirlb/hue-more/tree/f415d0ef795d0a565f8b2f009fa5e90132c0626b/manifest.webmanifest

```
icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512
```


## License: unknown
https://github.com/lazy-guy/simple-compass/tree/1606f213848533fa4a1045fbbeeb66d2fb58e1fc/dark.webmanifest

```
.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
```


## License: MIT
https://github.com/ralscha/blog/tree/ccef68409190d1a1e202dfde64c2d8c3de47514a/sw-push/src/main/resources/static/sw.js

```
('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.
```


## License: unknown
https://github.com/maboglia/Corso-Javascript/tree/a79e47644004d36ef83cbe94e7c4cf595d9ce53b/appunti/L4_11_Angular_PWA.md

```
))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
```

```
const CACHE_NAME = 'neighbiz-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
```

