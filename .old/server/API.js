// API
// ===

module.exports.api = function(server) {

	// Sample Rest Call

	server.get('/hello', function(req, res){
		res.send('<h1>Hello World!</h1>');
	});

}
