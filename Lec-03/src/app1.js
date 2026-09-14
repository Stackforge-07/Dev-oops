// console.log('Starting our project');
const express=require('express')
const app=express() //it create instance of express or calling web server

//we can define multiple route handlers like this 
//this works in the same way
//u will figure out error while handling both at the same time and at the same route
//thats just bcz 
//at / route app.use works for /efswv , /users and all types with / but but but
// it doesnt work when there is app.get with /route

// app.use('/',(req,res,next)=>{
//     console.log('Middleware 1');
//     // res.send('Middlewrae works 1')

//     next();
    
// })

// app.use('/',(req,res,next)=>{
//     console.log('Middleware 2');
//     res.send('Middlewrae works 2')
//     next();
    
// })

//middleware chains gets executed before request handlers handles send the response
//app.use can also can sends a response 
//app.get can also use as a middleware like below
//who sent response to our https request  is route handlers

app.use('/',(req,res,next)=>{
    console.log('Global middleware');
    next();   
})

app.get(
    '/users',
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


//our server is listening at  to our incoming request
app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

