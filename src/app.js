// console.log('Starting our project');
const express=require('express')
const app=express() //it create instance of express or calling web server


//code for hndles incoming request
//Request handler

//if we dont give route then it runs on evry route

app.use((req,res)=>{
    res.send('Namaste Dashboard')
})

app.use('/helo',(req,res)=>{
    res.send('Hello from the server')
})

//our server is listening at port 4000 to our incoming request

app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

