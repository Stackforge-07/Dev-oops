const express=require('express')
const app=express()//it create instance of express
const connectDB=require('./config/database')
const User=require('./models/users')
//first connect with the databse then starts listning to the request

app.post('/signup',async(req,res)=>{
    const user=new User({
        firstName:'yash',
        lastName:'raj',
        age:20,
        password:'@123',
});

try{
  await user.save();
  res.send('User created success');
  

}catch(err){
    res.status(401).send('Doesnt connect to db')

}
  
})

connectDB()
   .then(() => {
    console.log('Mongoose connection eastablished');

        app.listen(3000,(req,res)=>{
            console.log('server works');
            
        })
   })

   .catch(()=>{

    console.log('Mongoose connection not eastablished');

   });

