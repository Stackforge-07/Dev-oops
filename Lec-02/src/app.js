// console.log('Starting our project');
const express=require('express')
const app=express() //it create instance of express or calling web server

//only handles get request 
 app.get('/user/:id',(req,res)=>{
    // console.log(req.query);

    console.log(req.params);

    res.send('get req called')
})

//only handles post request
app.post('/helo',(req,res)=>{
    res.send('post req called')
})


app.delete('/helo',(req,res)=>{
    res.send('delete req called')
})

//this will match all api calls of http requrst like get post put patch delete
//order matters agar isko upar rakhenge to saare req ka anwer ye dega 
// app.use('/helo',(req,res)=>{
//     res.send('Hello from the server')
// }


//our server is listening at port 4000 to our incoming request
app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

