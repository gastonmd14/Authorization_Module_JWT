var express = require('express');
var router = express.Router();
const handler = require('../handlers/users')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try{
      const result = await handler.getAllUser();
        if (result) {
          res.status(200).json(result);
    }
  }
  catch {
    (err) => {
      console.log(err);
    }
  }
  //res.send('respond with a resource');
});

router.get('/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
      const result = await handler.getOneUser(id);
        if (result) {
          res.status(200).json(result);
    }
  }
  catch {
    (err) => {
      console.log(err);
    }
  }
  //res.send('respond with a resource');
});

module.exports = router;