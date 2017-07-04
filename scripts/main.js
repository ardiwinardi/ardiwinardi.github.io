'use strict';

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
	console.log('Service Worker and Push is supported');

	navigator.serviceWorker.register('sw.js')
	.then(function(swReg) {
		console.log('Service Worker is registered', swReg);

		swRegistration = swReg;
		initialiseUI();
	})
	.catch(function(error) {
		console.error('Service Worker Error', error);
	});
} else {
	console.warn('Push messaging is not supported');
}

function initialiseUI() {
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
		sendToDb(subscription);
	})
	.catch(function(err) {
		console.log('Failed to subscribe the user: ', err);
	});
}

function sendToDb(subscription) {
	if (subscription) {
		var content = JSON.stringify(subscription);
		var jstring = JSON.parse(content);
		
		var data = {};
		data.key = jstring.keys.p256dh;
		data.token = jstring.keys.auth;
		data.endpoint = jstring.endpoint;
		
		console.log(data);
		$.ajax({
			url:'https://ardiwinardi.000webhostapp.com/add',
			type:'post',
			data : data,
			success:function(msg){
				console.log(msg);
			}
		})
	}
}

