const TaskList = require('../models/task');

// controller for the home page entry point

module.exports.home = function(request, response){
    // fetching the data from the database..we need the full data
    TaskList.find({}, function(error, task){
        if(error){
            console.log('error in getting the data from the database');
            return;
        }
        return response.render('home', {
            title:"To be Done",
            ourList : task
        });
    });
};


module.exports.add = function(request, response){

    console.log(request.body,'.....................');
    
    TaskList.create({
        title: request.body.title,
        desc: request.body.desc,
        categ : request.body.categ,
        duedate:request.body.duedate
    }, function(error, task){
        if(error){
            console.log(error);
            console.log("error in adding the task to the list");
            return;
        }
        console.log(task);
        return response.redirect('/');
    });
};

module.exports.delete = function(request, response){
    // to get the id of the selected box
    let id = request.query;
    console.log(id);

    // get length
    var checkbox = Object.keys(id).length;

    // going through all the selected boxes to get the no. of boxes selected
    for(let i=0; i<checkbox; i++)
    {
        // get the item and delete it
        TaskList.findByIdAndDelete(Object.keys(id)[i], function(error){
            if(error){
                console.log("error in deleteing the item");
                return;
            }
        })
    }
    return response.redirect('back');


};