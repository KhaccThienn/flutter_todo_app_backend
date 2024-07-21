const user = require("../models/user");

const user_controller = {
    getUserData: (req, res) => {
        user.getUserData(req.params.id, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                console.log("🚀 ~ user.getUserData ~ result:", result)
                res.status(200).json(result);
            }
        })
    },
    login: (req, res) => {
        user.login(req.body, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                console.log("🚀 ~ user.login ~ result:", result)
                res.status(200).json(result);
            }
        })
    }
}

module.exports = user_controller