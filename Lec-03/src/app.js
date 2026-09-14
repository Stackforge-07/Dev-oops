// console.log('Starting our project');
const express=require('express')
const app=express() //it create instance of express or calling web server


//if there are multiple route handlers then u ned next to go to second route handlers 
//if u dont use it then it got stuck 
//if u have sent res with 1st route handler and used next then it got retuns with 1st not goes to 2nd one

//**if a res.send is already done with the same api then if u try to send again res to same yrl then it throws an error */

app.use(
    '/',
    (req,res,next)=>{
    // res.send('Middleware works 1')
    console.log('Handles server 1');
    
    next()

    },
    
    (req,res,next)=>{
        // res.send('Middlware works 2nd')
        console.log('Handles server 2');

        next()
    },

     (req,res,next)=>{
       console.log('Handles server 3');
        res.send('Middlware works 3rd')
        next()
    }
)

//our server is listening at port 4000 to our incoming request
app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

