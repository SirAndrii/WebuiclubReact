const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors= require('cors');

const routes = require('./routers/routes')

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



const app = express ();
const PORT = 5000;
app.disable('x-powered-by');
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


app.listen(PORT, ()=> {
    console.log('Server has been started successfully on port ' + PORT);
});











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