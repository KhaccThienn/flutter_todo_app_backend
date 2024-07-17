const conn = require("../configs/database")

const user = {
    login: (data, callback) => {
        let sql = "SELECT * FROM tbl_user WHERE username = ? AND password = ?";
        conn.query(sql, [data.username, data.password], (err, result) => {
            if (err) {
                callback(null, err)
            } else {
                callback(result[0], null)
            }
        })
    },
    getUserData: (id, callback) => {
        let sql = "SELECT * FROM tbl_user WHERE id = ?";
        conn.query(sql, id, (err, result) => {
            if (err) {
                callback(null, err)
            } else {
                callback(result[0], null)
            }
        })
    }
}

module.exports = user;