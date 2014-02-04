exports.write = function(req, res){
	res.render('index', { title: 'Cartapac.io | html writer' })

	// Dependencies
	var config = require('../config')
	var global = require('../globals')
	var path = require('path')
	var fs = require('fs')
	var _ = require('underscore')
	var slug = require('slug')

	// Templates
	var mustache = require('mustache')
	var tpl_root = path.resolve(__dirname, '..', 'basic_template')

	// find all the projects
	global.db.find({type: 'project'}, function(err, docs){
		if (err){
			console.log(err)
		}
		
		var template_uri = path.resolve(tpl_root, 'index.html')
		//TODO: use async
		var template = fs.readFileSync(template_uri)

		_.each(docs, function(element){
			var output = mustache.render(template.toString(), element)
		 	var filename = path.resolve(__dirname, '..', 'output', slug(element.name)+'.html') 
			
			//TODO: use async
			fs.writeFileSync(filename, output)	
		})
		
	})

};