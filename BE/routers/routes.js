var express = require('express');
var router = express.Router();
/* require ('../mongo/model'); */


const {allItems,filteredItems,oneItem} = require('../controllers/controller')

router.get('/', allItems);

// parse application/x-www-form-urlencoded

router.post('/', filteredItems);

router.post('/id', oneItem);

module.exports = router;