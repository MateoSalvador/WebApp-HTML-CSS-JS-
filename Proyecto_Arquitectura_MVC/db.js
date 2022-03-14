const mongoose = require('mongoose');

const DB_URI='mongodb://localhost:27017/medicaldb'


module.exports=()=>{
    const connect = () =>{
        mongoose.connect(
            DB_URI,
            (err)=>{
                if(err){
                    console.log('DB: ERROR!');
                } else{
                    console.log('Conexion correcta'); 
                }
            }
        )
    }
    connect(); 
}

