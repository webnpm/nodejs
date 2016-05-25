$(function(){
	$('#button1').click(function(){
		$.ajax({
			type: 'post',
			url: '/demo/index_cc',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){
				console.log(data);
			}
		})
	})
	$('#button2').click(function(){
		$.ajax({
			type: 'post',
			url: '/demo/list_cc',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){
				console.log(data);
			}
		})
	})
	$('#button').click(function(event) {
		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		$.ajax({
			type: 'post',
			url: '/demo/login',
			dataType: 'json',
			data: {
				username: username,
				password:password
			},
			success:function(data){
				if(data.status == 200){
					alert(data.mes);
					window.location.href= '/';
				}
			}
		})
	});
})