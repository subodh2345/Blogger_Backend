const postModel = require('../model/post-model')

let getpostsdetails = async (req, res) => {
    let data = req.body;
    try{
        let postData = await postModel.getPostdetails(data);
        res.send(postData);
    }catch(err){
        res.send(err);
    }
}

let addPostDetails  = async(req , res ) => {
       let data = req.body;
        try {
            let postData = await postModel.addPostDetails(data);
            res.send(postData);
            console.log(postData);
        } catch(err) {
            res.send(err);
            console.log(err);
        }
}

let updatePosts = async(req , res) =>{
    let id = req.params.cid;
    let data = req.body;
     try {
        let postdata = await postModel.updatepostdetails(id,data);
        res.send(postdata);
        console.log(postdata);
     } catch (err) {
        res.send(err);
        console.log(err);
     }

}

let deletePosts = async(req, res) =>{ 
    let id = req.params.cid;
    try {
        let postdata = await postModel.deletePostDetails(id);
        res.send(postdata);
       // console.log(postdata);
    }catch(err) {
        res.send(err);
     //   console.log(err);
    }

}

module.exports = { getpostsdetails , addPostDetails , updatePosts , deletePosts}