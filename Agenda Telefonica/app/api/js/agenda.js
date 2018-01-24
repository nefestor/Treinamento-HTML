$(document).ready(function() {
	$('#listar').click(function() {
		alert('hello');
		$.get('http://localhost:3000/v1/contacts', function(data, status) {
			$('#test').html(data);
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
	$('#excluir').click(function() {
		alert('hi!');
		var id = $('#id').val();
		$.ajax({
			url:`http://localhost:3000/v1/contacts/${id}`,
			type: 'DELETE',
			sucess: function(result) {
				alert('gg!');
			}
		});
	});
	$('#procurar').click(function () {
		alert('Localizando!');
		var id = $('#id').val();
		$.get(`http://localhost:3000/v1/contacts/${id}`, function(data, status) {
			$('#test').html(data);
			console.log(data);
			alert(status);
		});
	});
});