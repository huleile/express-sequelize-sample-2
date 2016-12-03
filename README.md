# express-sequelize-sample-2

<p>
    <span style="color:#FFFFFF;background-color:#C0C0C0;border:5px solid #C0C0C0;font-size:14px;">学习练习</span>
    <span style="color:#FFFFFF;background-color:#FF00FF;border:4px solid #FF00FF;font-size:12px;">Express</span>
    <span style="color:#FFFFFF;background-color:#FFC0CB;border:4px solid #FFC0CB;font-size:12px;">Sequelize</span>
    <span style="color:#FFFFFF;background-color:#8B0000;border:4px solid #8B0000;font-size:12px;">模块分离</span>
</p>

**Express-sequelize-sample-2**是对sample1的升级，将route , model , app server进行分离

1.  **app.js** : 项目服务启动文件 
2.  **routes** : 项目路由分发控制
3.  **models** : 数据字典Model，对应数据库
4.  **db.js** : 数据库配置文件