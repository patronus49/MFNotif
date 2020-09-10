const orderPlacedQueue = require('./order-placed');
const orderPackedQueue = require('./order-packed');
const orderShippedQueue = require('./order-shipped');
const orderCancelledQueue = require('./order-cancelled');

const getTopicQueue = (queueName) => {

    switch(queueName) {
        case 'ORDER_PLACED':
            return orderPlacedQueue;
        case 'ORDER_PACKED':
            return orderPackedQueue;
        case 'ORDER_SHIPPED':
            return orderShippedQueue;
        case 'ORDER_CANCELLED':
            return orderCancelledQueue;
        default:
          throw new Error('Message type not supported.')
      }

}

const topicQueue = {
    getTopicQueue
}

module.exports = topicQueue;  