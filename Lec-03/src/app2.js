const express=require('express')
const app=express() //it create instance of express or calling web server

//middleware for all the req with /admin
//app.all('/) works for all put patch get post
//if we want auth for get then
//app.get('/admin)

const {adminauth,userauth}=require('./middleware/auth')

app.use('/admin',adminauth)

app.get('/users',userauth,(req,res)=>{
    res.send('user auth done thanks for coming')
})
app.get('/admin',(req,res)=>{

    //before login into admin page we are checking authentication
    // const token='yshs';
    // const isauth=token=='ysh'

    // if(isauth){
    //     res.send('u will get all the data')
    // }

    // else {
    //     res.send('no data will be given')
    // }

    res.send('/admin page after auth welcomes ')
})


//our server is listening at  to our incoming request
app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

