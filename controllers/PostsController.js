const db = require('../models');


module.exports = {
    //find all movies
    findAll: function(req, res) {
        db.Posts
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
        db.Posts
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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