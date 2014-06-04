var Server = require('cartapacio-server'),
    gui = require('nw.gui')

var win = gui.Window.get()


try{
  var config = require('./localConfig.json')
  console.log('root path: ' + config.path)

  var server = new Server(config.path)
  server.init()


  win.window.location = 'admin/index.html'

  console.log('---Cartpacio Ready')

} catch (err) {
  // throw new Error('config file not found')
  win.window.location = 'folderConfig/index.html'
}

