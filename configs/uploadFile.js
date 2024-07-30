const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/users");
    },
    filename: (req, file, callback) => {
        let filename = `${file.originalname}`;
        callback(null, filename);
    }
});

const uploadFile = multer({
    storage: diskStorage
});

module.exports = uploadFile;