const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const DescriptionSchema= new Schema(
    {
        country: String,
        category: String,
        technik: String,
        thema: String
    }
);

const CatalogSchema = new Schema(
    {
        id: {
            type: Number,
            required:true,
            min:1,
            

        },
       item: {
           type: String,
           required:true
       },
       img: {
          type: String,
          required:true
       },
        name: {
           type: String,
           required:true
       },
       price: {
           type: Number,
           min: 0
       },
       description: {
           type: DescriptionSchema,
           required:true,
           deafult: {country:'',category:'',technik:'',thema:''}
       }
    }
) 

mongoose.model('items',CatalogSchema); // create model for items. We don't need to export it

/* 
 id: 1,
        item: 'Lord is great',
        img: 'https://molbert.com.ua/img/gallery/big/picture_15558_9339.jpg',
        name: 'Gudaev Konstantin',
        description: {
            country: 'Ukraine',
            category: 'Symbolism',
            technik: 'Oil',
            thema: 'Seascape'
        },
        price: '1160$' */
