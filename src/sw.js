// change to the version you get from `npm ls workbox-build`
// importScripts('workbox-v3.4.1/workbox-sw.js');

// your custom service worker code

// the precache manifest will be injected into the following line
//

importScripts('workbox-v4.3.1/workbox-sw.js');

/**
 * If no registration is active yet, this is the first install of a service worker; therefore we can just immediately let the waiting registration become active and take over.
 */
self.addEventListener('install', () => {
    if (!self.registration.active) {
        self.skipWaiting();
    }
});

/**
 * Since we only skip waiting if there wasn't an active registration already, a client can send a `skipWaiting` message, which we will use to activate the waiting registration.
 */
self.addEventListener('message', ({ data }) => {
    if (data === 'skipWaiting') {
        self.skipWaiting();
    }
});

/**
 * Every time a new service worker is taking over, let's claim all the clients. This will trigger a `controllerchange` event, which all the clients should listen to and reload (to avoid issues with outdated cached files).
 */
self.addEventListener('activate', e => {
    e.waitUntil(clients.claim());
});

// self.addEventListener('fetch', event => {
//   (async () => {
//     const db = await getDb();
//     const dbObjName = 'user';
//     const c = db.transaction(["user"]).objectStore('user').openCursor();
//     const requestUrl = new URL(event.request.url);

//     await new Promise(async resolve => {
//       c.onsuccess = e => {
//         const { target: { result: { value: { userData } } } } = e;
//         const checkIfSf = isSf(requestUrl.href, userData.instanceUrl);
//         const targetUrl = requestUrl.origin.match('localhost') ? '' : requestUrl.origin;

//         if (requestUrl.href.match('/services/') || checkIfSf) {
//           event.respondWith(function () {
//             return fetch(requestUrl.pathname + requestUrl.search, {
//               headers: {
//                 'Target-URL': targetUrl || userData.instanceUrl,
//                 'Authorization': `Bearer ${userData.accessToken}`
//               }
//             }).then(d => resolve(d));
//           }());
//         }
//       };
//     });
//   })();
// });

// function getDb() {
//   const req = indexedDB.open('studio');

//   return new Promise((resolve, reject) => {
//     let db;
//     req.onsuccess = e => {
//       resolve(e.target.result);
//     };

//     req.onerror = () => {
//       reject('Db error');
//     };
//   });
// }

// function isSf(targetUrl, instanceUrl) {
//   const needle = instanceUrl.replace('https://', '').split('.')[0];
//   return targetUrl.match(needle);
// }


// the precache manifest will be injected here
self.workbox.precaching.precacheAndRoute([]);
