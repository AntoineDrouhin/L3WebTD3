/**
 * Created by Geoffrey on 27/05/2016.
 */
// ======================================================
// Contact Main controller ===============================
// ======================================================
var ContactController = exports;


//--------------------------------------- Module dependencies.
var mongoose 	= require('mongoose'),
    Person 		= mongoose.model('Contact'),
    moment      = require('moment'),
    Util        = require('../helpers/appUtils');


/**
 * Find a specific contact from database
 * @param req
 * @param res
 * @param next
 * @param id
 */
ContactController.findContact = function(req, res, next, id){

    Util.info('Find contact '+ id);

    Person.findOne({_id : id}).exec(function(err, person){
        // --- Manage error
        if(err){
            res.status(400).json({message : "Error Loading Contact"});
        }
        // --- Maybe no one found
        if(!contact){
            res.status(404).json({message : "Contact not found"});
        }else{
            req.current_contact = contact;
            next();
        }
    })
};
/**
 * Return contact detail
 * @param req
 * @param res
 */
ContactController.getContact = function(req, res){
    Util.info('Get contact '+ req.current_contact);

    res.status(200).json(req.current_contact)
};