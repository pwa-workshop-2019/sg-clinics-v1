/*eslint-disable*/

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener("push", event => {
  console.log('notification received'+event.data.text());
  const pushMessage = event.data.text();

  const body = {
    title: 'SG Clinics',
    icon: '/images/icon-64.png',
    body: pushMessage
  };

  event.waitUntil(self.registration.showNotification('SG Clinics', body));
});

const bgSyncPlugin = new workbox.backgroundSync.Plugin('sgClinic-book', {
  maxRetentionTime: 1 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);