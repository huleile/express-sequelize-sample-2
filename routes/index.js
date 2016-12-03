"use strict";
import books from './books';
import students from './students';

export default function(router){
	books(router);
	students(router);
}