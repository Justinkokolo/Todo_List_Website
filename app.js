const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");


const app = express();

var items =["Buy Food","Eat It"];
var workList =[];
//telling the app to use ejs
app.set('view engine', 'ejs');

//Telling the app to use body parser
app.use(bodyParser.urlencoded({extended : true}));

//Teling express to use the public static folder
app.use(express.static("public"));

app.get("/", function(req, res) {

 let nameOfday = date.getDay();

  res.render("list", { listTitle: nameOfday , newListItems: items});

});

app.post("/",function(req, res){
     var item = req.body.newItem;

     if(req.body.list === "work"){
       workList.push(item);
       res.redirect("/work");
     }else{
       items.push(item);
       res.redirect("/");
     }


});

app.get("/work",function(req ,res){

   res.render("list", { listTitle: "Work List", newListItems: workList});
});

app.get("/about",function(req ,res){
  res.render("about");
});


app.listen("3000", function() {

  console.log("im listening");
});
