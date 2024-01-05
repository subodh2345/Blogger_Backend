const mongoose = require('mongoose');


// post schema
const postSchema = new mongoose.Schema({
    title:String,
    description:String,
    status: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category' 
    },
    author:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'authors' 
    }
  });
  
  module.exports = mongoose.model('posts', postSchema);


  // author schema
  const authSchema = mongoose.Schema  ({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String,},
    phone:{type:String},
    status:{type:String,},
    posts:  
    [
        // {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref:"Posts"
        // }
    ],
    
    //status:{type:String},
    created:{ type: Date, default: Date.now },
    token:{type:String}
});

module.exports = mongoose.model('author',authSchema)


// Category Schema
const catSchema = mongoose.Schema   ({
  cat_name:{type:String,require:true},
  cat_description:{type:String,required:true},
  status:{type:String},
  //created:{ type: Date, default: Date.now }
  posts:  
  [
  //     {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: 'Posts'
  //     }
  ],
  created:{ type: Date, default: Date.now }

});

module.exports = mongoose.model('category',catSchema)