// I decided to put the multer in here so as not to tightly couple my code to this library. If I wish to change the library it will be easy.

const multer = require('multer');
/* 
I could have used this approach for uploading files, but I need control over the uploads for testing and other purposes

const storage = multer.diskStorage({
	destination: './music',
	filename : function(req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	}
}); */
const upload = multer({ dest: './uploads' });

module.exports = upload;