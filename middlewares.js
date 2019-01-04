const express = require('express');
const router = express.Router();
const helmet = require('helmet');

router.use(helmet());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

module.exports = router;
