/**
 * Created by Geoffrey on 27/05/2016.
 */
//------ Model CONTACT
'use strict';

//--- Module dependencies
var mongoose 	= require('mongoose'),
    Schema	 	= mongoose.Schema,
    async       = require('async'),
    moment      = require('moment');

//------------------------------------------- Contact Schema
var MessageSchema = new Schema({

    "messages" : [{
        "nom" : String,
        "date": String,
        "textMessage" : String,
        "idCv": String
    }]

});

mongoose.model('Message', MessageSchema);