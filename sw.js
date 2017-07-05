self.addEventListener('push', function(event) {
	
	if (!(self.Notification && self.Notification.permission === 'granted')) {
		return;
	}
	
	var str = event.data.text();
	if(str){
		var res = JSON.parse(str);
	}
	
	var msg = res.msg || 'Test Message';
	var icon = res.icon  || '';
	var badge = res.badge || '';
	var tag = res.tag || '';
	var image = res.image || '';
	var onclick = res.onclick || '';
	var action_title = res.action_title || '';
	
	const title = res.title || 'Adzan Reminder';
	const options = {
		body: msg,
		icon: icon,
		badge: badge,
		tag : tag,
		image : image,
		onclick : onclick,
		actions :[
			{ "action": "yes", "title": action_title}
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
