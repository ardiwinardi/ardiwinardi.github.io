'use strict';

self.addEventListener('push', function(event) {
	console.log(event);
	console.log(event.data);
	
	const title = 'Adzan Reminder';
	const options = {
		body: event.data.text(),
		icon: 'images/allah.gif',
		badge: 'images/allah.gif',
		actions :[
			{ "action": "yes", "title": "Dapatkan diskon korma"}
		]
	};

	const notificationPromise = self.registration.showNotification(title, options);
	event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
	console.log(event);
	console.log(event.data);
	
	event.notification.close();
	event.waitUntil(
		clients.openWindow('https://jadwalsholat.org/adzan/ajax/ajax.daily1.php?id=14')
	);
});
