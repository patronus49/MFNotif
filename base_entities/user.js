/**
 * base container for users in the system,
 * users subscribe to target topic queues to get
 * notified about
 */
class User {

    constructor(id, name, topicsSubscribed = []) {
        this.id = id;
        this.name = name;
        this.queuesSubscribed = topicsSubscribed;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTopicsSubscribed() {
        return this.topicsSubscribed;
    }

    setTopicsSubscribed(topic) {
        this.topicsSubscribed.push(topic);
    }

}

module.exports = User;