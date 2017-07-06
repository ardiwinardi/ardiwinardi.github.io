self.addEventListener('push', function(event) {
	
	if (!(self.Notification && self.Notification.permission === 'granted')) {
		return;
	}
	
	var str = event.data.text();
	var title = 'Adzan Reminder';
	var options = {
		body: 'Test'
	}
	
	if(str){
		var res = JSON.parse(str);
		title = res.title;
		options = res.options;
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
