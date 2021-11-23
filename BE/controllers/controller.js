const mongoose = require('mongoose');
require ('../mongo/model');
const Item = mongoose.model('items'); 


exports.allItems = async (req,res) => {
     res.status(200).json(
        await Item.find()
    ); //give all items from MongoDB use allways AWAIT
};

exports.filteredItems = async (req,res) =>{
    const {category,technik,thema} = req.body;
    let filter={};
    if (category){filter['description.category'] = category;}
    if (technik){filter['description.technik'] = technik;}
    if (thema){filter['description.thema'] = thema; }
    
    res.status(200).json(
        await Item.find(filter)
    );
}

exports.oneItem = async (req,res) =>{
    const id = req.body;
     console.log(req.body) ;
    res.status(200).json(
        await Item.findOne(id)/* .then((item)=>console.log(item)).catch( e => console.log(e) )*/
    ); 
}