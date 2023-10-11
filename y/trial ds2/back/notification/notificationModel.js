const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userMail: {
    type: String,
    // required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    // required: true,
  },
  message: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
