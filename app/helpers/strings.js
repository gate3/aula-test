const ERROR = {
	CREATE_MUSIC:{
		FILE_AND_NAME_ERROR: 'Please provide a music file and the music name.',
		FILE_ONLY: 'Please provide a music file to upload.',
		NAME_ONLY: 'Please provide a music file name.',
	},
	UPLOAD: 'Error occurred uploading this song.',
	FATAL: 'An error occurred fetching this song. Please try again or contact  our team.'
};

const SUCCESS_MESSAGE = {
	CREATE_MUSIC: 'successfully uploaded',
	UPLOAD: 'Upload Complete'
};

module.exports = {
	ERROR,
	SUCCESS_MESSAGE,
};