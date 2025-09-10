// A very simple service worker to demonstrate offline capability.

// Name of the cache
const CACHE_NAME = 'my-app-cache-v1';

// List of files to cache
const urlsToCache = [
  '/',
  '/index.html'
];

// Install event: triggered when the service worker is first installed.
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: triggered for every network request.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from the cache
        if (response) {
          return response;
        }

        // Not in cache - fetch from the network
        return fetch(event.request);
      }
    )
  );
});
