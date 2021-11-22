const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors= require('cors');

const mongoDB = 'mongodb+srv://webuiclub:somepassword@cluster0.soza5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.Promise = global.Promise;
//try to rewrite to async/await
mongoose.connect(mongoDB)
    .then(()=> {console.log('connection with cloud MongoDB istalled!')} )
    .catch((e)=>{
        console.log('Sever Error', e.message);
        process.exit(1); //kill server
    })
      
const DB = mongoose.connection;   //You can access the default connection using mongoose.connection 

require ('./mongo/model');
const Item = mongoose.model('items'); 

const app = express ();
const PORT = 5000;
app.disable('x-powered-by');
app.use(cors({ origin: '*' }));

app.get('/', async (req,res) => {
     res.status(200).json(
        await Item.find()
    ); //give all items from MongoDB use allways AWAIT
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/', async (req,res) =>{
    const {category,technik,thema} = req.body;
    let filter={};
    if (category){filter['description.category'] = category;}
    if (technik){filter['description.technik'] = technik;}
    if (thema){filter['description.thema'] = thema; }
    
    res.status(200).json(
        await Item.find(filter)
    );
});

app.post('/id', async (req,res) =>{
    const id = req.body;
     console.log(req.body) ;
    res.status(200).json(
        await Item.findOne(id)/* .then((item)=>console.log(item)).catch( e => console.log(e) )*/
    ); 
});



app.listen(PORT, ()=> {
    console.log('Server has been started successfully on port ' + PORT);
});









/* new Item({id: 1,        item: 'Lord is great',        img: 'https://molbert.com.ua/img/gallery/big/picture_15558_9339.jpg',        name: 'Gudaev Konstantin'}).save(); // save to DB */
/* Item.find({}).then(items=>console.log(items)).catch( e => console.log(e)); //get all DB */

//Item.find({  'description.category': 'Symbolism',  'description.thema':'Seascape' }).then(items=>console.log(items)).catch( e => console.log(e));
//old style
//Item.find({}).where('description.category').equals('Symbolism').then(items=>console.log(items))
//finding nested object https://stackoverflow.com/a/55989877/2408962 ,https://mongoosejs.com/docs/queries.html
//find somentrhin wirh multiSUbdocuments https://stackoverflow.com/a/43767188/2408962
/* //FIlter by Price
Item.find({  price: { $gte :  500, $lte: 1000} }  ).then(items=>console.log(items)).catch( e => console.log(e));  */
//Item.find({id: {$exists:false}}).remove().then(()=> {console.log('removed')});


/* async function start (){
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
            })
        console.log('connection with MongoDB istalled');

    }
    catch(e){
        console.log('Sever Error', e.message);
        process.exit(1); //kill server
    }
}
start () */


//app.use('/api', express.static(path.join(__dirname,'data'), {extensions: ['json']}) );

/* app.get('/api/:name',(req,res) => {  //http://expressjs.com/en/guide/routing.html#route-parameters
    let {name: filename}=req.params;
        
    fs.open(filename, 'r', (err, fd) => { //https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback - ассинхронне читання файлу
        if (err) {
          if (err.code === 'ENOENT') {
            res.status(404).end('404 '+filename);
            return;
          }
          throw err;
        }
        try {
          res.json(fd);
        } finally {
          fs.close(fd, (err) => {
            if (err) throw err;
          });
        }
      });
});  */

/* app.get('/',(req,res) => {
    res.status(403).end('403/forbidden'); //give 403
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});
 */