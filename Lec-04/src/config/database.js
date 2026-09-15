const mongoose=require('mongoose')

const connectDB=async () => {
   await mongoose.connect(
    //now it refers to the cluster when we add/hello world it connects with hello world database
    "mongodb+srv://prakharraj005_db_user:huKbar-kivcuc-2tadbo@cluster0.jwefofd.mongodb.net/Devoops"
);
 
};


module.exports=connectDB;
