const mongoose=require('mongoose')
//Here we can define our schema

//schema  is the structure that defines what a User document should look like in the database.

//devoops is database and users is collection and inside it we have data
//we can sent it the m,ongodb id by itself also
const userschema= new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },

    emaiId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },

});

const UserModel=mongoose.model('Users',userschema)

module.exports=UserModel