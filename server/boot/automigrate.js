'use strict';
module.exports = function (app) {
        
    //Enter list of models name
        const models = ['test2', 'post-test'];

        //const mod = app.models();
        
        //mod.forEach(function(Model){console.log(Model.modelName)});

        for (var i=0; i < models.length; i++){
            app.dataSources.mysql.autoupdate(models[i], err => {
                if (err)
                    throw err;
                console.log('Model sync');
            });

        }

    

 
}