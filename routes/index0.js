"use strict";
import path from 'path';
import fs from 'fs';
const bname = path.basename(module.filename);
const routesPath = path.dirname(__dirname + '/routes/');

export default function(router){	
	fs.readdirSync(routesPath)
	.filter( file => file !== bname)
	.forEach(file => {
		let basename = path.basename(file,'.js');
		if(basename !== 'index'){
			//注意此处只能使用require实现动态加载模块
			//import加载为静态加载，只能放在文件的开始进行加载
			const route = require(path.join(routesPath,basename)).default;
			route(router);
		}
	})
}