// console.log('Starting our project');
const express=require('express')
const app=express() //it create instance of express or calling web server


//code for hndles incoming request
//Request handler

//if we dont give route then it runs on evry route global route
//order matters it starts searching routes from top to bottom

app.use('/helo',(req,res)=>{
    res.send('Hello from the server')
})

app.use('/',(req,res)=>{
    res.send('Namaste Dashboard')
})


//our server is listening at port 4000 to our incoming request
app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

