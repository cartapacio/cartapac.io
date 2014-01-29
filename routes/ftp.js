var path = require('path')
var config = require('../config')
var debug = require('debug')('api:ftp')

var Datastore = require('nedb')
var db = new Datastore({
	filename: path.resolve(__dirname, '..', config.database_path),
	autoload: true
})

var doctype = config.ftp


exports.index = function(req, res){
	
	db.find({type: doctype}, function(err, docs){
		if(err){
			debug("error on index: \n ", err)
		} else {
			debug("sucess show index: ")
			res.send(docs)
		}
	})
};


// exports.new = function(req, res){
// 	debug('bang')
//   	res.send('create new artwork');
// };


exports.create = function(req, res){
	debug('received: \n %j', req.body)
	
	//TODO: object validation 
	db.insert(req.body, function(err, doc){
		if(err){
			debug("error on create: \n ", err)
		} else {
			debug("sucess on crete \n", doc._id)

			res.send(doc)
		}
	})
};

exports.show = function(req, res){
	var id = req.params.ftp

	db.findOne({_id: id}, function(err, doc){
		if(err){
			debug("error on show: \n ", err)
		} else {
			debug("sucess show _id: ", id)
			res.send(doc)
		}
	})
};

// exports.edit = function(req, res){
//   res.send('edit artwork ' + req.params.artwork);
// };

exports.update = function(req, res){
	var id = req.params.ftp

	//TODO: validate

	db.update({_id:id}, req.body, {}, function (err, numReplaced){
		if(err){
			debug("error son update \n", err)
		} else {
			//res.send(numReplaced)
			db.findOne({_id: id}, function(err, doc){
				if(err){
					debug("error on query update: \n ", err)
				} else {
					debug("sucess query update _id: ", doc)
					res.send(doc)
				}
			})
		}
	})
};

exports.destroy = function(req, res){
	var id = req.params.ftp

	db.remove({_id:id}, {}, function (err, numRemoved){
		if(err){
			debug("error on destroy \n", err)
		} else {
			res.send('OK');
		}
	})
  
};