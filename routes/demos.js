var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	port:3306,
	database:'demo',
})
var datas = 'select a.id,a.name,b.shuxue from test_student as a left join student_points as b on a.id=b.student_id;';
var datass = 'select * from student_points;';
router.post('/:id', function(req, res, next) {
	if(req.params.id == 'index_cc'){
		pool.getConnection(function(err, connection) {
			connection.query( datas, function(err, rows) {
				res.send(rows);
			})
			connection.release();
		})
	}
	if(req.params.id == 'list_cc'){
		pool.getConnection(function(err, connection) {
			connection.query( datass, function(err, rows) {
				res.send(rows);
			})
			connection.release();
		})
	}
	if(req.params.id == 'login'){
		pool.getConnection(function(err, connection) {
			var datasss = "select * from login where username='"+req.body.username+"'and password='"+req.body.password+"'"; 
			connection.query( datasss, function(err, rows) {
				if(rows.length > 0){
					 req.session.username = rows[0].username;
					 res.send({
					 	'status':200,
					 	'mes':'登录成功'
					 });
				}
			})
			connection.release();
		})
	}
});
module.exports = router;
