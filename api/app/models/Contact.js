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
var ContactSchema = new Schema({

    "contacts" : [{
        "nom" : String,
        "date": String,
        "message" : String
    }]

});

mongoose.model('Contact', ContactSchema);