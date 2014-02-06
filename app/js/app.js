/**
 * Created by jweber on 01.10.13.
 */


//loading
console.log("global: " +  global);



var $ = require("jquery"),
	_ = require("underscore"),
	Backbone = ("backbone"),
	//global = require("./js/globals.js"),
	Router = require("./js/router.js");

global.document = window.document;
global.navigator = window.navigator;


//require("backbone.nedb")(Backbone);

/*
exports.initialize = function(){
	Router.initialize();
}
*/

$(document).ready(function(){
	Router.initialize();
});






