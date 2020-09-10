const topicQueue = require('../queues/topic-queue');
const User = require('../base_entities/user');

/**
 * container for maintaining list of users(subscribers) in  the system
 * these users want to get notified about the system activity and
 * subscribe to topics accordingly
 */
class Users {

    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    setUsers(users) {
        this.users = users;
    }

    /**
     * Adds a new user,
     * adds user to topics queues as subscriber
     * @param {*} id subscriber id
     * @param {*} name name
     * @param {*} topicsSubscribed topics subscribed 
     */
    addUser(id , name, topicsSubscribed) {
        const user = new User(id , name, topicsSubscribed);
        const topicQueuesToSubscribe = topicsSubscribed;
        this.subscribeToTopics(topicQueuesToSubscribe, user);
        this.users.push(user);
        
    }

    /**
     * Adds user to topic queues as subscriber
     * @param {*} topicQueuesToSubscribe topic queue
     * @param {*} user user
     */
    subscribeToTopics(topicQueuesToSubscribe, user) {
        topicQueuesToSubscribe.forEach(topic => {
            const topicQueueToSubscribe = topicQueue.getTopicQueue(topic);
            topicQueueToSubscribe.addSubscriber(user); 
        });
    }

}

module.exports = new Users();