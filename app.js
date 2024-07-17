require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./configs/database');

const api_routes = require('./routes/api.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./uploads")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

api_routes(app);

console.log("\n🚀 ~ Routes:");
app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(`http://${process.env.APP_HOST}:${process.env.APP_PORT}${r.route.path}`)
    }
})
console.log();

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Server is listening on http://%s:%s`, process.env.APP_HOST, process.env.APP_PORT);
});