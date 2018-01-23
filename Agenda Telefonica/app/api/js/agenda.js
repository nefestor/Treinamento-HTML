$(document).ready(function() {
	$('#listar').click(function() {
		alert('hello');
		$.get('http://localhost:3000/v1/contacts', function(data, status) {
			$('#lista').html(data);
			console.log(data);
			alert(status);
		});
	});
	$('#cadastrar').click(function() {
		alert('hi');
		var nome = $('#nome').val();
		var email = $('#email').val();
		var sexo = $('#sexo').val();
		var endereco = $('#endereco').val();
		var obs = $('#obs').val();
		$.post('http://localhost:3000/v1/contacts', {
				firstName: nome,
				email: email,
				gender: sexo,
				info: {
	                address: endereco,
	                comments: obs
	            }
	        }, function(data, status) {
	        	$('#test').html(data);
            });
	});
});
