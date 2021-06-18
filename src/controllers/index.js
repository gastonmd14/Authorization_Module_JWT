var express = require('express');
var router = express.Router();
const handler = require('../handlers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', async (req, res, next) => {
//   try{
//     const result = await handler.getOneUser();
//       if (result) {
//         res.status(200).json(result);
//   }
// }
// catch {
//   (err) => {
//     console.log(err);
//   }
// }
  res.send('respond with a resource');
});

router.get('/register', async (req, res, next) => {
  const body = {...req.body}
  try{
    const result = await handler.createOneUser(body);
      if (result) {
        res.status(200).json(result);
  }
}
catch {
  (err) => {
    console.log(err);
  }
}
  // res.send('respond with a resource');
});


module.exports = router;
