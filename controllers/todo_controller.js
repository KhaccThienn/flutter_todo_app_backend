const todo = require("../models/todo")

const todo_controller = {
    getAllToDoList: (req, res) => {
        todo.getAllToDoList(req.params.user_id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                console.log("🚀 ~ todo.getAllToDoList ~ data:", data)
                res.status(200).json(data);
            }
        })
    },
    createToDoTask: (req, res) => {
        todo.createToDoTask(req.body, (err, data) => {
            console.log("🚀 ~ todo.createToDoTask ~ req.body:", req.body)
            if (err) {
                res.json(err);
            } else {
                console.log("🚀 ~ todo.createToDoTask ~ data:", data)
                res.status(200).json(data);
            }
        });
    },
    updateToDoStatus: (req, res) => {
        todo.updateToDoStatus(req.params.id, req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                console.log("🚀 ~ todo.updateToDoStatus ~ data:", data)
                res.status(200).json(data);
            }
        });
    },
    deleteToDoTask: (req, res)=> {
        todo.deleteToDoTask(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                console.log("🚀 ~ todo.deleteToDoTask ~ data:", data)
                res.status(200).json(data);
            }
        })
    }
}

module.exports = todo_controller
