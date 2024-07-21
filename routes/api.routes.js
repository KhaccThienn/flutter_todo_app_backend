const todo_controller = require("../controllers/todo_controller")
const user_controller = require("../controllers/user_controller")

const api_routes = (app) => {
    app.get("/api/v1/user/:id", user_controller.getUserData)
    app.post("/api/v1/login", user_controller.login)

    app.get("/api/v1/todos/:user_id", todo_controller.getAllToDoList)
    app.post("/api/v1/todos/create", todo_controller.createToDoTask)
    app.patch("/api/v1/todos/update/:id", todo_controller.updateToDoStatus)
    app.delete("/api/v1/todos/delete/:id", todo_controller.deleteToDoTask)
}

module.exports = api_routes
