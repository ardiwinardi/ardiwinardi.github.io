'use strict';

self.addEventListener('push', function(event) {
	console.log(event.data.text());
	
	var res = event.data.text();
	
	console.log(res.title);
	const title = res.title;
	const options = {
		body: res.msg,
		icon: res.icon,
		badge: res.badge,
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
		clients.openWindow('https://jadwalsholat.org/adzan/ajax/ajax.daily1.php?id=14')
	);
});
