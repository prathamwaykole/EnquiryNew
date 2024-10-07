const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/se",(req,res) =>{
let data = [req.body.name,req.body.phone,req.body.query];
console.log();
let from = "c3333prathamwaykole@gmail.com";
let to = "co.b.58.pratham.waykole@gmail.com";
let subject = "enquiry form" + req.body.name;
let text = "name = " + req.body.name + "phone = " + req.body.phone + "query = " + req.body.query;

let transport = nodemailer.createTransport({
service : "gmail",
auth : {
user : "c3333prathamwaykole@gmail.com",
pass : "cokzokghqpeicrhd"
}
});
let mailOptions = {
from : from,
to : to,
subject : subject,
text : text
}
transport.sendMail(mailOptions,(err, info)=>{
if(err){
res.status(500).json(err);
}
else{
res.status(200).json("Mail sent");
}
});
});
app.listen(9000 , () =>{console.log("ready @ 9000")});