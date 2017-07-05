'use strict';

headers.append('Access-Control-Allow-Origin', 'https://ardiwinardi.000webhostapp.com');
headers.append('Access-Control-Allow-Credentials', 'true');

const applicationServerPublicKey = 'BDYmWnemb0QcQKXCPJvZmnfkCHKYyJvPSbTm1mmTR6lwOk-92uTswvEzSKsr0Rvnn35Tpyz1eExFe_285mheu5Y';
let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
	const padding = '='.repeat((4 - base64String.length % 4) % 4);
	const base64 = (base64String + padding)
	.replace(/\-/g, '+')
	.replace(/_/g, '/');

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
	navigator.serviceWorker.register('sw.js')
	.then(function(swReg) {
		swRegistration = swReg;
		swRegistration.update();
		initialiseUI();
	})
	.catch(function(error) {
		console.error('Service Worker Error', error);
	});
} else {
	console.warn('Push messaging is not supported');
}

function initialiseUI() {
	
	//unsubscribeUser();
	subscribeUser();
  
	// Set the initial subscription value
	swRegistration.pushManager.getSubscription()
	.then(function(subscription) {
		isSubscribed = !(subscription === null);

		if (isSubscribed) {
			console.log('User IS subscribed.');
		} else {
			console.log('User is NOT subscribed.');
		}
	});
}

function subscribeUser() {
	const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
	swRegistration.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: applicationServerKey
	})
	.then(function(subscription) {
		console.log('User is subscribed.');
		updateSubscriptionOnServer(subscription);
		isSubscribed = true;
	})
	.catch(function(err) {
		console.log('Failed to subscribe the user: ', err);
	});
}

function updateSubscriptionOnServer(subscription) {
	// TODO: Send subscription to application server
	
	if (subscription) {
		//insert subs
		var content = JSON.stringify(subscription);
		var jstring = JSON.parse(content);
		
		var data = {};
		data.keyword = jstring.keys.p256dh;
		data.token = jstring.keys.auth;
		data.endpoint = jstring.endpoint;
		$.ajax({url:'https://ardiwinardi.000webhostapp.com/add',type:'post',data : data});
	}
}

function unsubscribeUser() {
	swRegistration.pushManager.getSubscription()
	.then(function(subscription) {
		if (subscription) {
			//delete subs
			var content = JSON.stringify(subscription);
			var jstring = JSON.parse(content);
			
			var data = {};
			data.keyword = jstring.keys.p256dh;
			data.token = jstring.keys.auth;
			data.endpoint = jstring.endpoint;
			$.ajax({url:'https://ardiwinardi.000webhostapp.com/del',type:'post',data : data});
			return subscription.unsubscribe();
		}
	})
	.catch(function(error) {
		console.log('Error unsubscribing', error);
	})
	.then(function() {
		updateSubscriptionOnServer(null);

		console.log('User is unsubscribed.');
		isSubscribed = false;
	});
}
