"use strict";
import http from 'http';
import express from "express";
import path from 'path';
import routes from './routes/index1';
const app = express();

app.set('port', process.env.PORT || 3001);

//静态资源 与 视图
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// route set
routes(app);

app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});


let server = http.createServer(app).listen(app.get('port'), () => {
	let host = server.address().address;
	console.log("服务启动成功，访问地址为 http://%s:%s", host, app.get('port'));
});
