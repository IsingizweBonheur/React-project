const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const port=5000;
app.use(cors());
app.use(express.json());
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"bonheur"
});
con.connect((err)=>{
    if(err) throw err;
    console.log("✔ CONNECTED TO MYSQL");
});
app.post("/login",(req,res)=>{
    const{username,password}=req.body;
    const sql ="SELECT username,password FROM user WHERE username=? AND password=?";
    con.query(sql,[username,password],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.status(200).json({msg:"Welcome"});
        }
        else{
            res.status(401).json({msg:"user not found"});
        }
    });
});
app.listen(port,()=>{
    console.log(`server run on port ${port}`);
});