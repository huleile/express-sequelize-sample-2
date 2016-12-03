"use strict";
import wga from 'wga';
import {Student} from '../models/student';

export default function(router) {
	router.get('/',function(req, res, next){
		res.send("hello baby");
	});

	router.get('/students',wga(function* (req, res) {
		let student = yield Student.findAll();
		res.json(student);
	}));
}