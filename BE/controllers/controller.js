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


/** CRUD */
/** create - 201*/
/* new Item({id: 1,        item: 'Lord is great',        img: 'https://molbert.com.ua/img/gallery/big/picture_15558_9339.jpg',        name: 'Gudaev Konstantin'}).save(); // save to DB */

/** read -200 */
/* Item.find({}).then(items=>console.log(items)).catch( e => console.log(e)); //get all DB */

//Item.find({  'description.category': 'Symbolism',  'description.thema':'Seascape' }).then(items=>console.log(items)).catch( e => console.log(e));
//old style
//Item.find({}).where('description.category').equals('Symbolism').then(items=>console.log(items))
//finding nested object https://stackoverflow.com/a/55989877/2408962 ,https://mongoosejs.com/docs/queries.html
//find somentrhin wirh multiSUbdocuments https://stackoverflow.com/a/43767188/2408962
/* //FIlter by Price
Item.find({  price: { $gte :  500, $lte: 1000} }  ).then(items=>console.log(items)).catch( e => console.log(e));  */

/** update 201 */
/** delit -202 */
//Item.find({id: {$exists:false}}).remove().then(()=> {console.log('removed')});



