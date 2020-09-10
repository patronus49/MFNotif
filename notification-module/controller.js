const topicQueue = require('../queues/topic-queue');

const createMessage = (req) => {
    return new Promise((resolve, reject) => {
            topicQueueToPost = topicQueue.getTopicQueue(req.body.type)
            return resolve(req);
        })
        .then((req) => {
            return topicQueueToPost.addToQueue(req.body)
        })
        .then(() => {
            return Promise.resolve(topicQueueToPost);
        })
        .catch((error) => {
            throw new Error('cannot post message. API failed.' + error);
        }); 
}

const notificationController = {
    createMessage
}

module.exports = notificationController;