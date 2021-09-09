var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port,function (){
    console.log("Server is running");
});
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("home");
})
app.get("/home",function (req,res) {
    res.render("home")
})
app.get("/historical",function (req,res) {
    res.render("historical");
})
app.get("/historical/geographical", function (req,res) {
    res.render("geographical");
})
app.get("/gallery", function (req,res) {
    res.render("gallery");
})
app.get("/contact", function (req,res) {
    res.render("contact");
})

