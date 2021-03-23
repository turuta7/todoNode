import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import createError from 'http-errors'
import dotenv from 'dotenv'
import path from 'path';

import tasks from './routers/tasks.js'
import categories from './routers/categories.js'

const __dirname = path.resolve();

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser());

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(tasks);
app.use(categories);

app.use((req, res) => {
    res.send('Server work')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app
