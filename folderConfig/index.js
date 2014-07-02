'use strict';

var fs = require('fs-extra'),
  $ = require('jquery')

function save (folderPath) {
  var configFile = 'localConfig.json'

  var data = {
    path: folderPath
  }

  fs.outputFile(configFile, JSON.stringify(data), function (err){
    if(err){
      console.error(err)
    }

    window.location = '../index.html'
  })
}

$(function () {
  var chooser = $('#folder-input');

  chooser.on('change', function() {
      var selection = $(this).val()

      if(selection){
        save(selection)
      } else {
        console.log('empty path');
      }
    });

  $('#select').click(function (){
    chooser.trigger('click');
  })
});







