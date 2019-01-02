const express = require('express');
const api = express.Router();
const uploadLibraryHelper = require('../helpers/upload-library.helper');
const createController = require('../controllers/music/create.crtl');
const {API_VERSIONS} = require('../helpers/constants');
//const logger = require('../helpers/logger.helper');

api.get(`/${API_VERSIONS.V1}/music`, function(req, res) {
	res.json({ status: true, message: 'Hello world' });
});

api.post(`/${API_VERSIONS.V1}/music`, uploadLibraryHelper.single('music_file') ,function(req, res) {
	createController(req, res, musicUploadHelper);
});

module.exports = api;
