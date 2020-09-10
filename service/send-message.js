const orderPlacedQueue = require('../queues/order-placed');
const orderPackedQueue = require('../queues/order-packed');
const orderShippedQueue = require('../queues/order-shipped');
const orderCancelledQueue = require('../queues/order-cancelled');

/**
 * a cron job running every 30 seconds
 * 1. to find notification messages in the topic queue
 * 2. deliver the notifications to all topic subscribers
 */
const sendMessageFromQueue = () => {
    console.log('--sending messages in topic queues--')
    const topicQueues = [orderPlacedQueue, orderPackedQueue, orderShippedQueue, orderCancelledQueue];
    topicQueues.forEach((topicQueue) => {
        const topicSubscribers = topicQueue.getSubscribers();
        topicQueue.queue.forEach((message) => {
            topicSubscribers.forEach((subscriber) => {
                sendMessage(message, subscriber);
            })
            topicQueue.deleteFromQueue(message);
        })
    })
}

/**
 * this is a mocks up for notification sent to topic subscribers
 * upon any system activity
 * @param {*} message notificate sent to user
 * @param {*} subscriber user to get notified about system activity 
 */
const sendMessage = (message, subscriber) => {
    const print = `Sent Message:
    Method: ${message.method}
    Subject: ${message.subject}
    Text: ${message.text} ${message.order_id}
    Recipient: ${message.recepient}
    Sender: ${message.sender}
    Notified To: (id: ${subscriber.getId()} name: ${subscriber.getName()})`;
    console.log(print);
}

const CronJob = require('cron').CronJob;
const messageSender = new CronJob('0/30 * * * * *', sendMessageFromQueue);

module.exports = messageSender;