(function(win){

  var module = {
    init: function(){
      navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
        if (!serviceWorkerRegistration.pushManager) {
          console.error('Push is not supported, Try Chrome M41.');
          return;
        } else {
          Notification.requestPermission(function(result){
            if(result === 'granted'){
              module.manageSubscription(serviceWorkerRegistration);
            } else {
              console.error('Please allow Notification')
            }
          });
        }
      })
    },

    manageSubscription: function(serviceWorkerRegistration){    
      serviceWorkerRegistration.pushManager.getSubscription()
        .then(function(subscription){
          if(!subscription){
            module.subscribe(serviceWorkerRegistration);
          } else {
            module.updateSubscription(subscription);
          }
        });    
    },

    subscribe: function(serviceWorkerRegistration){
      serviceWorkerRegistration.pushManager.subscribe()
        .then(function(subscription) {
          module.updateSubscription(subscription);
        })
        .catch(function(e) {
          console.error('Unable to register for push', e);
        });
    },

    updateSubscription: function(subscription){
        console.log(subscription);
    }

  };

  window.pushNotification = module;

})(window);


    // navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    //   // Check if this service worker supports push
    //   if (!serviceWorkerRegistration.pushManager) {
    //     showError('Ooops Push Isn\'t Supported', 'This is most likely ' +
    //       'down to the current browser doesn\'t have support for push. ' +
    //       'Try Chrome M41.');
    //     return;
    //   }

    //   // Check if we have permission for push messages already
    //   serviceWorkerRegistration.pushManager.hasPermission().then(
    //     function(pushPermissionStatus) {
    //       // Once we have a service worker, and checked permission,
    //       // enable the buttons
    //       var buttonContainer = document.querySelector('.button-container');
    //       buttonContainer.style.display = 'block';

    //       // If we don't have permission then set the UI accordingly
    //       if (pushPermissionStatus !== 'granted') {
    //         changeState(STATE_NOTIFICATION_PERMISSION);
    //         return;
    //       }

    //       // We have permission, so let's update the subscription
    //       // just to be safe
    //       serviceWorkerRegistration.pushManager.getSubscription().then(
    //         function(pushSubscription) {
    //           // Check if we have an existing pushSubscription
    //           if (pushSubscription) {
    //             sendSubscription(pushSubscription);
    //             changeState(STATE_ALLOW_PUSH_SEND);
    //           } else {
    //             changeState(STATE_NOTIFICATION_PERMISSION);
    //           }
    //         });
    //     });
    // });