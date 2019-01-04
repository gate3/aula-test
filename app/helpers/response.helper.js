const {ERROR} = require('../helpers/strings');
const logger = require('../helpers/logger.helper');

const successResponse = (params) => {
	return {status: true, ...params};
};

const errorResponse = (errorObject) => {
	const message = errorObject.message ? errorObject.message : ERROR.FATAL;
	// Log the error message to a logging service and display a more friendly message to the user.
	logger.error(`logging ${errorObject} to logging service`);
	return  {status: false, message};
};

module.exports = {
	successResponse,
	errorResponse,
};
