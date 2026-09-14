const express=require('express')
const app=express() //it create instance of express or calling web server

app.get('/getuserdata',(req,res)=>{

    //try to write everything bw try and catrch
   
    try {

    throw new Error("eror");
    console.log('error created');
    
    res.send('data')
         
        
    } catch (error) {
        res.status(500).send('something went wrong in getuserdata')

        
        
    }

    
    
   
})
//(err,req,res,next) this is proper format
//try to write it in end of application if there is some eror then it handles all the error
app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('something went wrong')
    }

})

app.listen(4000,()=>{
    console.log('server listen at 4000');
    
})

