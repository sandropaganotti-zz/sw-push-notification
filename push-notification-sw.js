
self.addEventListener('push', function(e) {
  console.log(self);

  if (!(self.Notification && self.Notification.permission === 'granted')) {
    console.error('Failed to display notification - not supported');
    return;
  }

  var data = e.data ? e.data.json() : {};
  var title = data.title || 'A push notification';
  var message = data.message || 'This comes from the Service Worker!';

  return registration.showNotification(title, {
    body: message,
    icon: 'images/touch/chrome-touch-icon-192x192.png'
  });

});