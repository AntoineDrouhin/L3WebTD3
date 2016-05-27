/**
 * Created by Geoffrey on 27/05/2016.
 */
// ======================================================
// Message Main controller ===============================
// ======================================================
var MessageController = exports;


//--------------------------------------- Module dependencies.
var mongoose 	= require('mongoose'),
    Message 	= mongoose.model('Message'),
    moment      = require('moment'),
    Util        = require('../helpers/appUtils');


/**
 * Find a specific message from database
 * @param req
 * @param res
 * @param next
 * @param id
 */
MessageController.findMessage = function(req, res, next, id){

    Util.info('Find message '+ id);

    Person.findOne({_id : id}).exec(function(err, person){
        // --- Manage error
        if(err){
            res.status(400).json({message : "Error Loading message"});
        }
        // --- Maybe no one found
        if(!message){
            res.status(404).json({message : "Message not found"});
        }else{
            req.current_message = message;
            next();
        }
    })
};
/**
 * Return message detail
 * @param req
 * @param res
 */
MessageController.getMessage = function(req, res){
    Util.info('Get message '+ req.current_message);

    res.status(200).json(req.current_message)
};

MessageController.insertMessage = function(req, res) {
    Util.info('Insert message');

    var post = new Message({
        "nom" : "toto",
        "date": "today",
        "textMessage" : "Peter la guele",
        "resume" : "bite"
    });

    post.save(function(err) {
        if(err){
            res.status(400).json({message : "Error saving message"});
        }

        else {
            res.status(200).json({message : "Ok saving message"});
        }
    });

    


}

MessageController.ok = function(err, numAffected) {
    Util.info(err);
    Util.info(numAffected);
}

