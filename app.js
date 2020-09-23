const express = require("express");
const path = require("path");
let fs = require("fs")
const app = express();
const mongoose = require('mongoose');
const port = 2170;
mongoose.connect('mongodb://localhost/contactusMadhyanti', {useNewUrlParser: true},{useUnifiedTopology: true})



// DEFINE MONGOOSE SCHEMA
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    designation:String,
    age_group:String,
    address: String,

  });
  const Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())



// PUG SPECIFIED STUFF
app.set('view engine','pug')// set the template engine as pug 
app.set('views',path.join(__dirname,'views'))//set the views directory



// ENDPOINTS 

app.get("/", (req, res) => {
    
    res.status(200).render('index.pug');
})


 app.post("/contact", (req, res) => {
    var myData =new Contact(req.body);
    myData.save().then(()=>{
       res.send('thank you for contacting us we will reply you soon.')
     }).catch(()=>{
           res.status(400).send('form was not submitted.')
     })

     res.status(200)
 });

// START THE SERVER
app.listen(port, () => {
    console.log(`the application is running at ${port}`)
});