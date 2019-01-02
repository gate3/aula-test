const {MUSIC_FILES_PATH} = require('./constants');

const getSiteUrl = req => {
	const {protocol} = req;
	return `${protocol}://${req.get('host')}`;
};

const getMusicUrl = (req, fileName) => `${getSiteUrl(req)}/${MUSIC_FILES_PATH}/${fileName}`;

module.exports = {
	getSiteUrl,
	getMusicUrl,
};
