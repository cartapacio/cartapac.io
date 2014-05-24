var Server = require('cartapacio-server'),
    gui = require('nw.gui') 

var server = new Server()
server.bootstrap()

var win = gui.Window.get()
win.window.location = "admin/index.html"

console.log("---Cartpacio Ready") 