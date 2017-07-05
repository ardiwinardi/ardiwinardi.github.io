self.addEventListener('push', function(event) {
	
	if (!(self.Notification && self.Notification.permission === 'granted')) {
		return;
	}
	
	var str = event.data.text();
	var res = JSON.parse(str);
	
	const title = res.title;
	const options = {
		body: res.msg,
		icon: res.icon,
		badge: res.badge,
		tag : res.tag,
		image : res.image,
		onclick : res.onclick,
		actions :[
			{ "action": "yes", "title": res.action_title}
		]
	};

	const notificationPromise = self.registration.showNotification(title, options);
	event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
	event.notification.close();
	event.waitUntil(
		clients.openWindow(event.notification.tag)
	);
});
