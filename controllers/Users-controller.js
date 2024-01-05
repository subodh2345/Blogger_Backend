const usermodel = require('../model/User-model')


let userlist = async (req, res) => {
  try {
    let data = req.body
    let userdata = await usermodel.userlist(data);
    res.send(userdata);
  } catch (err) {
    res.send(err);
  }
}

let adduser = async (req, res) => {
  let userdata = req.body;
  try {
    let data = await usermodel.adduser(userdata);
    res.send(data)
    console.log(data);
  } catch (err) {
    res.send(err)
  }
}


let updateuser = async (req, res) => {
  let uid = req.params.uid;
  let data = req.body
  try {
    let userdata = await usermodel.updateuser(uid,data);
    res.send(userdata);
  } catch (err) {
    res.send(err);
  }
}


let deleteuser = async (req, res) => {
  let uid = req.params.uid;
  try {
    let userdata = await usermodel.deleteuser(uid);
    res.send(userdata);
  } catch (err) {
    res.send(err);
  }
}


let userRegistration = async (req, res) => {
  res.send('user registered');
}

let login = async (req, res) => {
  let userdata = req.body;
  try {
    let userres = await usermodel.loginuser(userdata);
    res.send(userres);
  } catch (error) {
    res.send(error);
  }
}

module.exports = { login, userlist, updateuser, deleteuser, userRegistration, adduser }