# MFNotif backend
This project consists of a backend app for a notification service. It is implemented in NodeJS. It is targeted on node version > **v10.19.0**. 

### Project Structure

The project hierarchy is as follows:
 - base_entities 
    - queue.js - defines an array to mock as a container for storing incoming notification messages
    - user.js - defines a subscriber
 - notification-module
    - controller.js - implements the logic to for incoming notification message to get added to topic queue
    - router.js - defines the routes availaible to the app
 - queues
    - implement base queue entity into various topic queues
 - service
    - send-message.js - implements a cron-job to read from topic queues and send notification messages to each topic subscriber
 - system-entities
    - users.js - in memory data structure to maintain total list of users(subscribers) in the system.

 - **To start the App** -  change to app root folder as working directory then issue following command
    ```
    npm run start
    ```
- **Install app dependencies** - change to app root folder as working directory then issue the following command to install app dependecies as present in package.json
    ```
    npm install
    ```
- **Test** 
    - App comes with a driver program to test the functionality of the app via APIs. The test uses axios to mock up an API request. To run the test file
    1. Start the app server backend
    2. Open a new terminal window, change to app root directory
    3. Issue the following command to run the tests with test data,
    ```
    npm run test
    ```