const cron = require('node-cron');
const Booking = require('./models/Booking');
const sendNotification = require('./routes/notifications').sendNotification;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Run every 10 minutes
cron.schedule('*/10 * * * *', async () => {
  const now = new Date();
  const reminderWindow = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour ahead
  try {
    const bookings = await Booking.find({
      bookingTime: { $gte: now, $lte: reminderWindow }
    });
    for (const booking of bookings) {
      await sendNotification({
        token: booking.fcmToken,
        title: 'Booking Reminder',
        body: `Your booking at business ${booking.businessId} is coming up at ${booking.bookingTime.toLocaleString()}`
      });
    }
  } catch (err) {
    console.error('Error sending reminders:', err);
  }
});

console.log('Reminder scheduler started.');
