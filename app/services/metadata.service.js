const metaData = require('music-metadata');
const util = require('util');

const fetch  = path => {
	return metaData.parseFile(path, {native:true});
};

module.exports = {
	fetch
};