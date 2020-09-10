const Queue = require('../base_entities/queue');

class OrderCancelledQueue extends Queue {

    constructor () {
        super();
    }

    addToQueue(element) {
        return super.addToQueue(element, "ORDER_CANCELLED");
    }

    addSubscriber(user) {
        return super.addSubscriber(user);
    }

    getSubscribers() {
        return super.getSubscribers();
    }

    deleteFromQueue(element) {
        return super.deleteFromQueue(element);
    }

}

module.exports = new OrderCancelledQueue();