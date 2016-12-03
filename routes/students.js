"use strict";
import wga from 'wga';
import {Student} from '../models/student';
import {Router} from 'express';
const router = Router();

router.get('/',wga(function* (req, res) {
	let student = yield Student.findAll();
	res.json(student);
}));


export default router;
