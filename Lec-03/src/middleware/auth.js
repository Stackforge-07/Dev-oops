const adminauth=(req,res,next)=>{
    const token='ysh';
    const isauth=token=='ysh'

    if(isauth){
       next();
    }

    else {
        res.status(401).send('not allowed')
    }

}

const userauth=(req,res,next)=>{
    const token='ysh';
    const isauth=token=='ysh'

    if(isauth){
       next();
    }

    else {
        res.status(401).send('not allowed')
    }

}
module.exports={
    adminauth,
    userauth,

};