'use strict';

let app = require('koa')();
let render = require('koa-ejs');
let path = require('path');

render(app, {
	root: path.join(__dirname, 'templates'),
	layout: 'layout',
	viewExt: 'html',
	cache: false,
	debug: true
});

app.use(handler);

module.exports = app;

function* handler() {
	yield this.render('home');
}