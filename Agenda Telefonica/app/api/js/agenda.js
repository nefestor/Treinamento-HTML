let handleGetContacts = (data) => {
    data.forEach((contact) => {
        let tst = `
                    <li class="data-list-item">
                        <span class="title">${contact.firstName}</span>
                    </li>
                `
        $('#teste').append(tst)
    })
}
let handleGetContact = (data) => {
        let tst = `
                    <li class="data-list-item">
                        <span class="title">${data.firstName}</span>
                    </li>
                `
        $('#teste').append(tst)
}

$(document).ready(function() {
	$('#listar').click(function() {
		$.get('http://localhost:3000/v1/contacts', function(data) {
			handleGetContacts(data);
			console.table(data);
		});
	});
	$('#cadastrar').click(function() {
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
	        }, function(data) {
	        	$.get(`http://localhost:3000/v1/contacts/${data}`, function(data) {
				handleGetContact(data);
				});
            });
	});
	$('#excluir').click(function() {
		var id = $('#id').val();
		$.ajax({
			url:`http://localhost:3000/v1/contacts/${id}`,
			type: 'DELETE',
			sucess: function(data) {
				console.log(data);
				alert('Excluido!');
			}
		});
	});
	$('#procurar').click(function () {
		var id = $('#id').val();
		$.get(`http://localhost:3000/v1/contacts/${id}`, function(data) {
			console.log(data);
			handleGetContact(data);
		});
	});
	$('#editar').click(function () {
		var id = $('#id').val();
		var nome = $('#nome').val();
		var email = $('#email').val();
		var sexo = $('#sexo').val();
		var endereco = $('#endereco').val();
		var obs = $('#obs').val();
		let data = {
				firstName: nome,
				email: email,
				gender: sexo,
				info: {
	                address: endereco,
	                comments: obs
	            }
	    }
		$.ajax({
		  url: `http://localhost:3000/v1/contacts/${id}`,
		  type: 'PUT',
		  data: data,
		  success: alert("atualizado")
		});
	});
});