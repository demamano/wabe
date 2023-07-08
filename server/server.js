// imports and packages 
const express = require("express");
const mongoose = require("mongoose")
// initializations 
const PORT = process.env.PORT || 3000;
const app = express();
const DBConnect = "mongodb+srv://demaamano:IQrjhToGUOvDTCLM@cluster0.zbfks2s.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());

// database connection 
mongoose.connect(DBConnect).then(()=>{
    console.log("conection successful");
}).catch((e)=>{
    console.log(e);
});
app.listen(PORT,"0.0.0.0", ()=>{
console.log(`connected at port ${PORT}`);
});
