const express = require('express');
const app = express();
const notificationRouter = require('./notification-module/routes');
const users = require('./system_entities/users');
const messageSender = require('./service/send-message');

/**
 * driver block to create system users (subscribers)
 */
users.addUser(0001, "admin", ["ORDER_PLACED", "ORDER_PACKED", "ORDER_SHIPPED", "ORDER_CANCELLED"]);
users.addUser(0002, "inventory", ["ORDER_PLACED", "ORDER_PACKED", "ORDER_CANCELLED"]);
users.addUser(0003, "shipper", ["ORDER_PACKED", "ORDER_SHIPPED"]);

/**
 * start the cron job upon app start up
 */
messageSender.start();

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(express.json())

app.use('/notification', notificationRouter);

app.listen(3000, () => {
    console.log(`started server at localhost:3000`);
})