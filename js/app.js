window.addEventListener('load', function(){
	if ('serviceWorker' in navigator) {
	    navigator.serviceWorker.register('./push-notification-sw.js', {scope: './'});
	    new pushNotification({
	   		API_KEY: 'AIzaSyD8fZGjGrC4GDVsE33yv4sCcD7AYpGEZ_o'
	    });
	}
});  