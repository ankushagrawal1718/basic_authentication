require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./modals/user.modal');
const jwt = require('jsonwebtoken');



app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(
    process.env.CONNECTION_URL
).then(()=>{ 
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
    console.log("connection failed")
}
    );

app.post('/api/register', async(req,res)=>{
    console.log(req.body); 
    try{
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({status: "ok"})
    }
    catch(err){
        console.log(err);
        res.json({status:'error',error:"Duplicate mail"})
    }
    // res.json({status:'ok'});
    // res.send("Hello World");
})

app.post('/api/login', async(req,res)=>{
      const user = await User.findOne({
            email:req.body.email,
            password:req.body.password,
        })

        if(user){
            const token = jwt.sign(
            {
                name:user.name,
                email:user.email
            },
            process.env.SECRET_KEY)

            return res.json({status:'ok', user: token})
        } 
        else{
            return res.json({status:error,user:false})
        }
    
    
})
 
app.listen(PORT,()=>{
    console.log(`yeah i am listening to the server${PORT}`);
})