const Queue = require('../base_entities/queue');

class OrderPlacedQueue extends Queue {

    constructor () {
        super();
    }

    addToQueue(element) {
        return super.addToQueue(element, "ORDER_PLACED");
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

module.exports = new OrderPlacedQueue();