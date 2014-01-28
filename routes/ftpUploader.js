var path = require('path')
var config = require('../config')
var Datastore = require('nedb')
var FtpDeploy = require('ftp-deploy');

function findFtpConfig(callback){
	var db = new Datastore({
		filename: path.resolve(__dirname, '..', config.database_path),
		autoload: true
	})

	db.findOne({type: 'ftp_config'}, function(err, docs){
		callback(err,docs)
	})
}

function uploadToserver (config) {
	var ftpDeploy = new FtpDeploy()

	var server = {
	    username: config.username,
	    password: config.password,
	    host: config.host,
	    port: 21,
	    localRoot: path.resolve(__dirname, '..', 'output'),
	    remoteRoot: config.remoteRoot,
	    parallelUploads: 10,
	    exclude: ['.git']
	}

	ftpDeploy.deploy(server, function(err) {
	    if (err) console.log(err)
	    else console.log('finished')
	});
}


exports.deploy = function  (req, res) {
	res.render('index', { title: 'Cartapac.io | ftp uploader' })

	var ftp_config = findFtpConfig(function(err, docs){
		if(err){
			console.log(err)
		} else {
			uploadToserver(docs)
		}
	})
}