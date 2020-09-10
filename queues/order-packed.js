const Queue = require('../base_entities/queue');

class OrderPackedQueue extends Queue {

    constructor () {
        super();
    }

    addToQueue(element) {
        return super.addToQueue(element, "ORDER_PACKED");
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

module.exports = new OrderPackedQueue();