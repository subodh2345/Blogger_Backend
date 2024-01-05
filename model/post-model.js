// const { post } = require('../routers/author');
// const schema = require('../schemas/dbschema')


// let Posts = schema.posts;
//const posts = require('../helper/mongodb');
// const posts = require('../helper/mysql')

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title:String,
  description:String,
  status: String,
  categories:
   {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'categories' 
    },
    authors:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors' 
    }
  
});

const Post = mongoose.model('posts', postSchema);


const getPostdetails = async () => {
  try {
    const postData = await Post.find({}).populate('categories', '_id cat_name cat_description created')
    //.populate('authors');
    console.log(postData);
    return postData;
  } 
  catch (error) 
  {
    console.error(error);
  }
};





const addPostDetails = async (postData) => {
  try {
      const newPost = new Post(postData);
      const insertResult = await Post.insertMany(postData);
      console.log('Inserted post:', insertResult);
      return newPost;
  } catch (err) {
      console.error(err);
  }
};

const updatepostdetails = async (idpost, data) => {
  try {
      const updateResult = await Post.updateMany({ _id: idpost }, { $set: { ...data } });
      console.log('Update result:', updateResult);
      return updateResult;
  } catch (err) {
      console.error(err);
  }
};

let deletePostDetails = async (idpost) => {
  try {
    const deleteResult = await Post.deleteMany({ _id: idpost  });
    console.log(deleteResult);
    return deleteResult;
   
    } catch (err) {
      console.log(err);
    }
    
}

module.exports = { getPostdetails, addPostDetails, updatepostdetails, deletePostDetails };
