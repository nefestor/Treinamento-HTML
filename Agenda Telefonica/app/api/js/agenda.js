let handleGetContacts = (data) => { //Pega data (informações) que uma função que retorna 'contatos' e para cada contato de data, incrementa na variável tst uma li com um span dentro (que contém o nome do contato), por fim usa a função append para adicionar texto na ul #teste.
    data.forEach((contact) => {
        let tst = `
                    <li class="data-list-item">
                        <p style="text-decoration: underline;">Nome: ${contact.firstName} | Email: ${contact.email} | Sexo: ${contact.gender} | Endereço:${contact.info.address}<p>
                    </li>
                `
        $('#teste').append(tst)
    })
}
let handleGetContact = (data) => { //Assim como a função anterior, essa trabalha apenas com 1 contato (usado na hora do registro/exclusão/alteração)
        let tst = `
                    <li class="data-list-item">
                        <p>Nome: ${data.firstName}| Email: ${data.email} | Sexo: ${data.gender} | Endereço:${data.info.address}</p>
                    </li>
                `
        $('#teste').append(tst)
}

$(document).ready(function() { //Necessário para que o jQuery funcione de forma satisfatória.
	$('#listar').click(function() { //Função que lista todos os contatos e retorna-os na ul #teste e no console.
		$('#teste').empty();
		$.get('http://localhost:3000/v1/contacts', function(data) { //Usa o método GET para pegar a lista de contato na URL e retorna com a function(data) os dados dessa URL.
			handleGetContacts(data);
			console.table(data);
		});
	});
	$('#cadastrar').click(function() { //Cadastra um nome contato na agenda. Pega os dados inseridos nos inputs, usa o método POST para inserir esses dados na lista e por fim retorna na ul #teste o contato inserido.
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
	$('#excluir').click(function() {  //Pega o ID de quem você quer excluir da lista a partir do input, em seguida utiliza-se o método DELETE para fazer esse processo de remoção. Retorna o nome do usuário excluído na ul #teste e um alert.
		var id = $('#id').val();
		var apagar = confirm('Deseja realmente excluir este regristro?');
		if (apagar) {
			$.ajax({
				url:`http://localhost:3000/v1/contacts/${id}`,
				type: 'DELETE',
				sucess: alert("Contato excluido!")
			});
		} else {
			event.preventDefault();
		}
	});
	$('#procurar').click(function () { //Procura um ID específico, digitado a partir do input na tela e retorna esse ID na ul #teste, utilizando o método GET.
		var id = $('#id').val();
		$.get(`http://localhost:3000/v1/contacts/${id}`, function(data) {
			console.log(data);
			$('#teste').empty();
			handleGetContact(data);
		});
	});
	$('#editar').click(function () { //Edita informações de um usuário a partir do ID e das informações digitadas, usa-se o método PUT para realizar essa troca.
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
	$('#limpar').click(function() { //limpa a ul #teste, deixando-a em branco.

		$('#teste').empty();//Limpa ul inteiro de ID teste.
	});
});