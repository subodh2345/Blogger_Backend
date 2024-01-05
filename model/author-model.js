const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
 email: String,
 phone: Number,  
 status: String
});

const Author = mongoose.model('authors', authorSchema);  

const getAuthorData = async () => {
  try {
    const authors = await Author.find();
    console.log('All Authors:', authors);
    return authors; 
  } catch (error) {
    console.error(error);
   
  }
}

const addAuthor = async (authorData) => {
  try {
    const insertResult = await Author.insertMany(authorData);
    console.log(insertResult);
    return insertResult;
  } catch (err) {
    console.log(err);
   
  }
}

const updateAuthor = async (id , data) => {
  try {
   // for (const data of data) {
     // const { first_name, email, phone } = data;
      const updateResult = await Author.updateMany({ _id : id }, { $set: { ...data } });
      console.log(`Author updated:`, updateResult);
      return updateResult;
  } catch (err) {
    console.log(err);
  }
}

//}

const deleteAuthor = async ( idpost ) => {
  try {
    const deleteResult = await Author.deleteMany({  _id: idpost  });
    console.log(deleteResult);
    return deleteResult;
  } catch (err) {
    console.log(err);
    
  }
}

module.exports = { getAuthorData, addAuthor, updateAuthor, deleteAuthor };
