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

// the precache manifest will be injected here
self.workbox.precaching.precacheAndRoute([]);