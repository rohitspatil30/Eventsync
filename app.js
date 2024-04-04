const express = require("express");
const expressLayout = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayout);
app.use(cookieParser("EventSyncSecure"));
app.use(session({
    secret: "EventSyncSecretSession",
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(fileUpload());
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");


const routes = require("./server/routes/eventRoutes.js");

app.use("/", routes);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});