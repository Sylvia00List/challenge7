const express = require('express');
const router = express.Router();
const { users } = require('../models');
const userdataController = require('../controllers/userdataController');

router.get('/', userdataController.index);

router.get('/:id', userdataController.show);

router.post('/register', (req, res) => {
	users
		.create({
			// insert data here
		})
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			res.json(err.message);
		});
});



module.exports = router;
