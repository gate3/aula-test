const {MUSIC_FILES_PATH} = require('./constants');

const getMusicUrl = fileName => `${process.env.SITE_URL}/${MUSIC_FILES_PATH}/${fileName}`;

module.exports = {
	getMusicUrl,
};
