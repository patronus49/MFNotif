const notificationRouter = require('express').Router();
const notificationController = require('./controller');

notificationRouter.post('/create', (req, res, next) => {
    return notificationController.createMessage(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            next('something went wrong');
        })
});

module.exports = notificationRouter;