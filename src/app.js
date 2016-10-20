'use strict';

let app = require('koa')();
let render = require('koa-ejs');
let path = require('path');
let router = require('koa-router')();
let fs = require('mz/fs');
let bodyParser = require('koa-bodyparser');

render(app, {
	root: path.join(__dirname, 'templates'),
	layout: 'layout',
	viewExt: 'html',
	cache: false,
	debug: true
});

router.get('/', handler);
router.post('/json', bodyParser(), saveJson);

app.use(router.routes());

module.exports = app;

let n = 0;

function* saveJson() {
	let data = this.request.body.data;
	n++;
	yield fs.writeFile(`data${n}.json`, JSON.stringify(data));
	this.body = {success: true};
}

function* handler() {
	yield this.render('home');
}