require('dotenv').config();

const express = require('express');
const app = express();
const mws = require('./middlewares');

const logger = require('./app/helpers/logger.helper');
const routes = require('./app/routes');

app.use('/music', express.static(__dirname + '/music'));

app.use(mws);

// Routes Begin 
app.use(routes);
// Routes end

app.listen(3000, function() {
	logger.info('Listening on port 3000');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next('Requested endpoint not found!');
	// next(createError(404));
});
  
// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// render the error page
	res.status(err.status || 500);
	res.send('Route not found');
});