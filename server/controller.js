const Todo = require('../db/index.js');

const controller = {
    get: (req, res) => {
        Todo.find({})
        .sort({priority: 1})
        .then(results => res.send(results))
        .catch(err => res.status(404).send(err))
    },

    post: (req, res) => {
        Todo.create(req.body)
        .then(() => res.send(`document created`))
        .catch(err => res.status(404).send(err))
    },

    delete: (req, res) => {
        Todo.deleteOne(req.params)
        .then(() => res.send(`document deleted`))
        .catch(err => res.status(404).send(err))
    },

    put: (req, res) => {
        Todo.findByIdAndUpdate(req.params, req.body)
        .then(() => res.send(`document updated`))
        .catch(err => res.status(404).send(err))
    }

}

module.exports = controller;