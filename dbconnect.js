const mongoose=require("mongoose");


dbm= async ()=>{
     try {

       await mongoose.connect(process.env.MONGO_URL,{
         useNewUrlParser:true,
         useUnifiedTopology:true
       })
        
        console.log("mongoo is connected")

     }catch(error){
        console.log('mongoo Error:',error);

     }
    }
      module.exports=dbm;
    
    
    
