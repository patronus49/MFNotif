const axios = require('axios');

const testConfig = {
    method: 'post',
    url: 'http://localhost:3000/notification/create',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: ""
};

const orderPlaced = {
    "type":"ORDER_PLACED",
    "order_id":"001",
    "method":"email",
    "subject":"Order Placed",
    "text":"Dear User, Order Placed for order_id: ",
    "recepient":"user@domain.com",
    "sender":"info@marketfront.com"
};

const orderPacked = {
    "type":"ORDER_PACKED",
    "order_id":"001",
    "method":"email",
    "subject":"Order Packed",
    "text":"Dear User, Order Packed for order_id: ",
    "recepient":"user@domain.com",
    "sender":"info@marketfront.com"
};

const orderShipped = {
    "type":"ORDER_SHIPPED",
    "order_id":"001",
    "method":"email",
    "subject":"Order Shipped",
    "text":"Dear User, Order Shippped for order_id: ",
    "recepient":"user@domain.com",
    "sender":"info@marketfront.com"
};

const orderCancelled = {
    "type":"ORDER_CANCELLED",
    "order_id":"001",
    "method":"email",
    "subject":"Order Cancelled",
    "text":"Dear User, Order Cancelled for order_id: ",
    "recepient":"user@domain.com",
    "sender":"info@marketfront.com"
};

const testData = [orderPlaced, orderPacked, orderShipped, orderCancelled];

testData.forEach((data) => {
    data = JSON.stringify(data);
    const config = testConfig;
    config['data'] = data;
    console.log(`operation: ${(JSON.parse(data)).type} \n test data: ${data} \n`);
    axios(config)
        .then((response) => {
            console.log(`operation: ${(JSON.parse(data)).type} \n response data: ${JSON.stringify(response.data)} \n`);
        })
        .catch((error) => {
            console.log(error);
        });
});