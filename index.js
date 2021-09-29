var express = require("express");
const mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log("Server is running");
});
app.use(express.static("public"));
app.set("view engine","ejs");

mongoose.connect(
            'mongodb+srv://hoangnv02:0wZ3wCuUeO7HhXTo@cluster0.17irg.mongodb.net/Historical?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log('Database connected!'))
        .catch(err => console.log(err));

const dataSchema = {
    ID: Number,
    HinhAnh: String,
    TieuDe: String,
    NoiDung: String,
    Slug: String,
    TacGia: String,
    Ngay: String,
    Thang : String,
    Loai: String,
}

const Data = mongoose.model("data", dataSchema);

app.get("/",(req,res,next) => {
    Data.find({})
        .then((data) => {
            res.render("home", {
                data: data
            })
        })
        .catch(next);
})

app.get("/historical/geographical/:id", (req,res,next) => {
    Data.find({Loai: "Geographical"})
        .then((data) => {
            res.render("geographical-news", {
                data: data,
                id: req.params.id
            })
        })
        .catch(next);
})

app.get("/historical/geographical", (req,res, next) => {
    Data.find({Loai: "Geographical"})
        .then((data) => {
            res.render("geographical", {
                data: data
            })
        })
        .catch(next);
})

app.get("/historical/time/:id", (req,res,next) => {
    Data.find({Loai: "Time"})
        .then((data) => {
            res.render("time-news", {
                data: data,
                id: req.params.id
            })
        })
        .catch(next);
})

app.get("/historical/time", (req,res,next) => {
    Data.find({Loai: "Time"})
        .then((data) => {
            res.render("time", {
                data: data
            })
        })
        .catch(next);
})

app.get("/historical/customs/:id", (req,res,next) => {
    Data.find({Loai: "Customs"})
        .then((data) => {
            res.render("customs-news", {
                data: data,
                id: req.params.id
            })
        })
        .catch(next);
})

app.get("/historical/customs", (req,res,next) => {
    Data.find({Loai: "Customs"})
        .then((data) => {
            res.render("customs", {
                data: data
            })
        })
        .catch(next);
})

app.get("/gallery",(req,res, next) => {
    Data.find({})
        .then((data) => {
            res.render("gallery", {
                data: data
            })
        })
        .catch(next);
})

app.get("/contact",(req,res) => {
    res.render("contact");
})

app.post("/contact", (req,res) => {
    res.render("contact-success")
})

