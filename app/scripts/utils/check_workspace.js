define([
    'config/defaults'
    ], function (defaults){
    var fs = requireNode('fs')
    var path = requireNode('path')
    var util = requireNode('util')

    var workspace = path.resolve(defaults.user_workspace)

    //check for user workspace
    function getOrCreate (callback) {
        fs.exists(workspace, function (exists) {
            //util.debug(exists ? "workspace exists" : "no workspace");

            if(!exists){
                fs.mkdir(workspace, function(e){
                    if(e){
                        callback(false, "error creating workspace :", e)
                    } else {
                        callback(true, "successfully created workspace")
                    }
                })
            } else {
                callback(true, "workspace present")
            }
        });
    }

    return getOrCreate
})