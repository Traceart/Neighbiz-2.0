const axios = require('axios');

const FCM_SERVER_KEY = process.env.FCM_SERVER_KEY;

async function sendPushNotification(token, title, body) {
	const message = {
		to: token,
		notification: {
			title,
			body,
		},
	};

	await axios.post('https://fcm.googleapis.com/fcm/send', message, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `key=${FCM_SERVER_KEY}`,
		},
	});
}

module.exports = { sendPushNotification };
