//const mongoose = require('../helper/mongoose');

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  cat_name: String,
  cat_description: String,
  status: String,
  created: {type: Date, default: Date.now},
//   posts: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'posts'
// }]
});

const Category = mongoose.model('categories', categorySchema);

let getCatDetails = async () => {
  try {
    const categories = await Category.find({})
    // .populate('posts', '_id title description status ');
    console.log('All categories:', categories);
    return categories;
  } catch (error) {
    console.error(error);
    
  }
}

const addcat = async (categoryData) => {
  try 
  {
      console.log('categories model me body data-->',categoryData)
      let newcat = new Category(categoryData)
      const insertResult = await Category.insertMany(categoryData);
     // let insertResult = await newcat.save()
      console.log(insertResult);
      return insertResult;
  } 
  catch (err) 
  {
    console.log(err); 
  }
}

const deletecategory = async (idpost) => {
  try {
    const deleteResult = await Category.deleteMany({ _id: idpost  });
    console.log(deleteResult);
    return deleteResult;
  } catch (err) {
    console.log(err);
   
  }
}

const updatecat = async (idpost, data) => {
  try {
      const updateResult = await Category.updateMany({ _id: idpost }, { $set: { ...data } });
      console.log('Update result:', updateResult);
      return updateResult;
  } catch (err) {
      console.error(err);
  }
};




module.exports = { getCatDetails , addcat , deletecategory , updatecat }