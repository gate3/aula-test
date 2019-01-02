/** 
 * I decided to implement uploading of music as a service because i didn't want to tie this to s specific implementation. This way I expose only the api's i want and the app doesn't have to know if i am uploading to a file system or if i am uploading to S3, Azure blob or anywhere else.
 */
const fs = require('fs');
const mkdirp = require('mkdirp');
const {SUCCESS_MESSAGE, ERROR} = require('../helpers/strings');
const {MUSIC_FILES_PATH} = require('../helpers/constants');
const asyncReadFile = path => new Promise((resolve, reject)=> fs.readFile(path, (err, data) => err ? reject(err):resolve(data)));

const upload = async (file, name) => {
    await mkdirp(`./${MUSIC_FILES_PATH}`);
	return new Promise(async (resolve, reject) => {
		const buffer = await asyncReadFile(file.path); 
		const newFilename = `${Date.now()}-${file.originalname}`;
		fs.writeFile(`./${MUSIC_FILES_PATH}/${newFilename}`, buffer, (err) => {
			if(err) {
				return reject({status:false, message: ERROR.UPLOAD, data: err});
			}
			return resolve({status: true, message: SUCCESS_MESSAGE.UPLOAD, data: {newFilename}});
		});
	});
};

module.exports = {
	upload,
};