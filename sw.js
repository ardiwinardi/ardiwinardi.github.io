function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

self.addEventListener('push', function(event) {
	
	if (!(self.Notification && self.Notification.permission === 'granted')) {
		return;
	}
	
	var str = event.data.text();
	try {
        var res = JSON.parse(str);
		title = res.title;
		options = res.options;
		
		setCookie('title',title,360);
		setCookie('options',JSON.stringify(options),360);
    } catch (e) {
		var title = getCookie('title');
		var options = JSON.parse(getCookie('options'));
	}
    
	const notificationPromise = self.registration.showNotification(title, options);
	event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
	event.notification.close();
	event.waitUntil(
		clients.openWindow(event.notification.tag)
	);
});
