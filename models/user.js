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
    register: (data, callback) => {
        let sql = "INSERT INTO tbl_user SET ?";
        conn.query(sql, data, (err, result) => {
            if (err) {
                callback(null, err)
            } else {
                callback(result, null)
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
    },
    updatePassword: (id, newPassword, callback) => {
        let query = "UPDATE tbl_user SET password = ? WHERE id = ?";
        conn.query(query, [newPassword, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
}

module.exports = user;