const express = require('express');
const api = express.Router();

const songsRoute = require('../components/music/music.route');

api.use(songsRoute);

module.exports = api;