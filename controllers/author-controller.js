let authmodel = require('../model/author-model')

let getAutherDetail = async(req,res)=>{
    try{
        let Data = await authmodel.getAuthorData();
        res.send(Data)
        
    }catch(err){
        res.send(err);
    }
}

let addAutherDetail = async(req,res)=>{
 
    try{
        let data = await authmodel.addAuthor( req.body);
        res.send(data)
    }catch(error){
        console.log(error)
        res.send(error)
    }
   }

let updateAutherDetail = async(req,res)=>{
    let id = req.params.cid;
    let data = req.body;
    try{
        let authdata = await authmodel.updateAuthor(id, data);
        res.send(authdata)
    }catch(err){
        res.send(err);
    }
   }

let deleteAutherDetail = async(req,res)=>{
    
    try{
        let authdata = await authmodel.deleteAuthor( req.params.cid);
        res.send(authdata)
    }catch(err){
        res.send(err);
    }
    
   }
    

module.exports={getAutherDetail,addAutherDetail,updateAutherDetail,deleteAutherDetail}