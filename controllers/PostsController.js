const db = require('../models/Posts');


module.exports = {
    //find all movies
    findAll: function(req, res) {
        db
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //find movie by id
    findById: function(req, res) {
        db.Posts
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //create movie
    create: function(req, res) {
        console.log('i am in the create route')
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findBoth: function(req, res) {
        // console.log(req)
        db
        .find(
            { $and: [ {urlName: req.params.urlName}, {dayOfWeek: req.params.dayOfWeek}]}
        )
        .then(dbModel => res.json(dbModel))
    },
    //update movie
    update: function(req, res) {
        db.Posts
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //delete movie
    delete: function(req, res) {
        db.Posts
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}