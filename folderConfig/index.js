'use strict';

var fs = require('fs-extra'),
  path = require('path'),
  async = require('async'),
  $ = require('jquery'),
  Handlebars = require('handlebars')


var source = '<li class="folder" data-path="{{up}}">'+
  '<i class="fi-arrow-up"></i>'+
'</li>'+
'{{#each content}}'+
'  <li>'+
    '<i class="fi-folder"></i>'+
  '<span class="folder" data-path="{{this.path}}/{{this.name}}">{{this.name}}</span>'+
  '<span class="select" data-path="{{this.path}}/{{this.name}}">'+
    '<i class="fi-check"></i>'+
  '</span>'+
  '</li>'+
'{{/each}}'

var template = Handlebars.compile(source)

var destinationFolder = null

function save () {
  $('#msg').text('')
  console.log('here');
  if(destinationFolder){
    var folder = destinationFolder,
      root =  process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
      fullPath = path.join(root, folder, 'website'),
      //configFile = path.join('..', 'localConfig.json')
      configFile = 'localConfig.json'
    async.waterfall([
      function (next){
        fs.ensureDir(fullPath, function (err){
          if(err){
            next(err)
          }
          next()
        })
      },
      function (next){
        fs.outputFile(configFile, JSON.stringify({path:fullPath}), function (err){
          if(err){
            next(err)
          }
          next()
        })
      }
      ],
      function (err){
        if(err){
          throw err
        }
        window.location = '../index.html'
    })
  } else {
    $('#msg').text('no folder selected!')
  }
}


function update(e){
  var path = $(e).attr('data-path')
  exposeFolder(path, function (data){
     $('#folderList').html(template(data))
  })
}

function select(e){
  destinationFolder = $(e).attr('data-path')
  $('li').removeClass('selected')
  $(e).closest('li').toggleClass('selected')
}

function exposeFolder (requestPath, next) {

  var root =  process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    folder = requestPath || '',
    fullPath = path.join(root, folder),
    excludeDot = /^([^.][\w\W]+)/,
    folderList = new Array()

  fs.readdir(fullPath, function (err, files){
    if (err){
      throw err
    }

    async.forEach(files,
      function (file, callback){
        if(excludeDot.exec(file)){
          var current = path.join(fullPath, file)
          fs.lstat(current, function (err, stats){
            if(err){
              callback(err)
            }
            if(stats.isDirectory()){
              folderList.push({
                name: file,
                path: folder
              })
            }
            callback(null)
          })
        } else {
          callback(null)
        }
      },
      function(err){
        if(err){
          throw err
        }
        next({
          up: path.resolve(folder, '..'),
          content: folderList
        })
      })
  })
}

$(function () {
  exposeFolder('', function (data){
    console.log(data);
    var e = $('#folderList')
    e.html(template(data))


  })

  $(document).on('click', '.folder', function (){
    update(this);
  })

  $(document).on('click', '.select', function (){
    select(this)
  })

  $(document).on('click', '#save', function (){
    save(this)
  })
});





