/**
 * Created by aureliengarret on 27/05/2016.
 */

'use strict';

module.exports = function(router) {
    //------ LOAD CONTROLLER
    var messageController = require('../controllers/message');

    // -------- Retrieve all person from the database
    router.get('/message',  messageController.insertMessage);


};