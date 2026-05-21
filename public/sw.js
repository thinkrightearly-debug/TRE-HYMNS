const CACHE_NAME = 'tre-hymns-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.css',
  'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE).catch(e => {
        console.warn('Pre-cache warning (Vite bundle will cache dynamically during request):', e);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Cleaning old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stale-While-Revalidate for app assets and font caching
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip browser extensions or hot reload sockets
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset immediately, but perform a fetch in background to refresh cache silently
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {/* Ignore network error during silent background update */});
          
        return cachedResponse;
      }

      // If not in cache, fetch from network and dynamically cache
      return fetch(event.request)
        .then((networkResponse) => {
          // Verify valid response before caching
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          // Dynamic caching of assets
          if (url.origin === self.location.origin || url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          // If offline and navigating pages, fall back to root app shell
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
    })
  );
});
