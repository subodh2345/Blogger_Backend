const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  address: String,  
});


const Users = mongoose.model('users', userschema);


const userlist = async () => {
  try {
    const users = await Users.find();
    console.log('All Authors:', users);
    return users; 
  } catch (error) {
    console.error(error);
   
  }
}

const adduser = async (userdata) => {
  try {
    const insertResult = await Users.insertMany(userdata);
    console.log(insertResult);
    return insertResult;
  } catch (err) {
    console.log(err);
   
  }
}

const updateuser = async (uid , data) => {
  try {
   // for (const data of data) {
     // const { first_name, email, phone } = data;
      const updateResult = await Users.updateMany({ _id : uid }, { $set: { ...data } });
      console.log(`Users updated:`, updateResult);
      return updateResult;
  } catch (err) {
    console.log(err);
  }
}

//}

const deleteuser = async ( idpost ) => {
  try {
    const deleteResult = await Users.deleteMany({  _id: idpost  });
    console.log(deleteResult);
    return deleteResult;
  } catch (err) {
    console.log(err);
    
  }
}


module.exports = { userlist , adduser , deleteuser , updateuser}