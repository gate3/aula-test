const express = require('express');
const api = express.Router();
const uploadLibraryHelper = require('../helpers/upload-library.helper');
const musicUploadHelper = require('../services/music-upload.service');
const localDb = require('../services/local-db.service');
const metaData = require('../services/metadata.service');
const createController = require('../controllers/music/create.crtl');
const {API_VERSIONS} = require('../helpers/constants');
const {fetchAllMusic, fetchMusicById} = require('../controllers/music/fetch.ctrl');

api.get(`/${API_VERSIONS.V1}/music`, function(req, res) {
	fetchAllMusic(req, res, localDb);
});

api.get(`/${API_VERSIONS.V1}/music/:id`,function(req, res) {
	fetchMusicById(req, res, localDb);
});

api.post(`/${API_VERSIONS.V1}/music`, uploadLibraryHelper.single('music_file') ,function(req, res) {
	createController(req, res, musicUploadHelper, metaData, localDb);
});



module.exports = api;
