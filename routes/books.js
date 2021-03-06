"use strict";
import wga from 'wga';
import {Book} from '../models/book';
import {Router} from 'express';
const router = Router();

router.get('/',wga(function* (req, res) {
	let books = yield Book.findAll();
	res.json(books);
}));

router.get('/insertBook', wga(function* (req, res) {
	let name = "水浒传";
	let author = "施耐庵";
	let press = "清华出版社";
	let book = {name, author, press};
	let rst = yield Book.create(book);
	res.send(rst);
}));


export default router;

