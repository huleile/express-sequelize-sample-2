"use strict";
import Sequelize from "sequelize";
//数据库连接
const sequelize = new Sequelize(
	'test',
	'root',
	'',
	{
		'dialect':'mysql',
		'host':'localhost',
		'port':3306
	}
);

export default sequelize;
