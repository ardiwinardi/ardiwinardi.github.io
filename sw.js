self.addEventListener('push', function(event) {
	
	
	if (!(self.Notification && self.notification.permission === 'granted')) {
		return;
	}

	var data = {};
	if (event.data) {
		data = event.data.json();
	}
	console.log(data);
	
	
	var message = data.message || "Assalamu'alaikum";
	var icon = "images/new-notification.png";
  
	const title = data.title || "Adzan Reminder";
	const options = {
		body: message,
		icon: icon,
		badge: icon,
		actions :[
			{ "action": "yes", "title": "diskon"}
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
