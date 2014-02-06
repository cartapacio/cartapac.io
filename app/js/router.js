//loading

//var global = require('./globals.js'),
	var $ = require("jquery"),
	_ = require("underscore"),
	Backbone = require("backbone");

//require("backbone.nedb")(Backbone);



//uncomment to make window object global.

//global.document = window.document;
//global.navigator = window.navigator;


var appRouter = Backbone.Router.extend({
	routes: {
		"": "home",
	},

	home: function(){
		console.log("this is the home route");
	}
});

exports.initialize = function(){
	console.log("initializing");
	var router = new appRouter;

	$("body").on("click", ".back-button", function (event) {
    	event.preventDefault();
    	window.history.back();
	});
	Backbone.history.start();
}