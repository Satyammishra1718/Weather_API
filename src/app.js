const express=require("express")
const path=require("path")
const hbs=require("hbs");
const session = require("express-session");
const app=express();
const port=process.env.PORT || 3000;
require("dotenv").config();
const appID=process.env.APP_ID;

// public static path***********************************************
const static_path=path.join(__dirname,"../public");
// views to templates
const templatepath=path.join(__dirname,"../templates")
//  partials path
const partialspath=path.join(__dirname,"../templates/partials")



app.set("view engine","hbs");
app.set("views",templatepath)

// using partials
hbs.registerPartials(partialspath)

// using static for css and all static files like images and html
app.use(express.static(static_path));


// routing
app.get("/",(req,res)=>{
    res.render("views/index")
})

app.get("/about",(req,res)=>{
    res.render("views/about")
})

app.get("/weather",(req,res)=>{
    res.render("views/weather",{ apiKey: appID })
})

app.get("*",(req,res)=>{
    res.render("views/404error",{
        errormsg : "Opps! Page Not Found👻",
    })
})


app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});