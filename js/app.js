window.addEventListener('load', function(){
	if ('serviceWorker' in navigator) {
	    navigator.serviceWorker.register('/push-notification-sw.js', {scope: '/'});
	    pushNotification.init();
	}
});  