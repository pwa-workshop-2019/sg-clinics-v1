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
