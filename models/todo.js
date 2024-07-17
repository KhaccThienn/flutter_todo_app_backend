const conn = require("../configs/database")

const todo = {
    getAllToDoList: (user_id, callback) => {
        let sql = "SELECT * FROM tbl_todo WHERE user_id = ?";
        conn.query(sql, user_id, (err, result) => {
            if (err) {
                callback(null, err)
            } else {
                callback(result, null)
            }
        })
    },
    createToDoTask: (data, callback) => {
        let query = "INSERT INTO tbl_todo SET ?";
        conn.query(query, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    updateToDoStatus: (id, data, callback) => {
        let query = "UPDATE tbl_todo SET ? WHERE id = ?";
        conn.query(query, [data, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    deleteToDoTask: (id, callback) => {
        let query = "DELETE FROM tbl_todo WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
}

module.exports = todo