const catmodel = require('../model/category-model')



let getcatdetails = async (req, res) => {
    // let data = req.body;
    try {
        let catdata = await catmodel.getCatDetails();
        res.send(catdata);
        console.log(catdata);
    } catch (err) {
        res.send(err);
    }
}



let addCategory = async (req, res) => {
    let catdata = req.body;
    let results = await catmodel.addcat(catdata);
    res.send('add category' + results);
}

let updatecat = async (req, res) => {
    let catid = req.params.cid;
    let catpostdata = req.body;
    try {
        let catdata = await catmodel.updatecat(catid, catpostdata)
        res.send(catdata);
    } catch (err) {
        res.send(err);
    }
}

let deletecat = async (req, res) => {
    let catid = req.params.cid;
    try {
        let catres = await catmodel.deletecategory(catid);
        res.send(catres);
    } catch (err) {
        res.send(err);
    }
}
module.exports = { addCategory, getcatdetails, updatecat, deletecat }