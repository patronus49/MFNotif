const _ = require('lodash');

/**
 * base container for maintaining the list of messages,
 * users subscribe to these containers to get notified
 * about messages posted
 */
class Queue {

    constructor () {
        this.queue = [];
        this.subscribers = [];
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }

    getSubscribers() {
        return this.subscribers;
    }

    /**
     * adds a new message to topic queue
     * @param {message} element message to be added
     * @param {topicQueue} queueName name of message target topic queue
     */
    addToQueue(element, queueName) {
        this.queue.push(element);
        const message = `Added to ${queueName} queue 
        ${JSON.stringify(element)}`;
        console.log(message);
    }

    /**
     * removes message from the topic queue
     * @param {message} element message to be removed from the target topic queue
     */
    deleteFromQueue(element) {
        this.queue = _.remove(this.queue, (entry) => {
            _.isEqual(entry, element)
        })
        return this.queue;
    }

}

module.exports = Queue;