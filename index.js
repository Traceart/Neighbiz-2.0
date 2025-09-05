const express = require('express');
const { sendPushNotification } = require('./notifications');
const router = express.Router();

router.post('/notify', async (req, res) => {
	const { token, title, body } = req.body;
	try {
		await sendPushNotification(token, title, body);
		res.json({ success: true });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
