/*var StringEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
function validarEmail() {
	var campoEmail = document.getElementById("email");
    if (email != "") {
        if(! StringEmail.test(email)) {
         alert("Email Invalido");
         email.focus();
         return false;
        }
    }
}
var StringNome = /[A-z]/;
function validarNome(n) {
    if (nome != "") {
        if(! StringNome.test(nome)) {
         alert("Nome Invalido");
         nome.focus();
         return false;
        }
    }
}*/

let handleGetContacts = (data) => { //Pega data (informações) que uma função que retorna 'contatos' e para cada contato de data, incrementa na variável tst uma li com um span dentro (que contém o nome do contato), por fim usa a função append para adicionar texto na ul #teste.
    data.forEach((contact) => {
    	if(contact.isFavorite && contact.info.comments == "") {
	        let tst = `
	                    <li class="data-list-item">
	                        <p>Nome: ${contact.firstName} | Email: ${contact.email} | Sexo: ${contact.gender} | Endereço:${contact.info.address} | Favoritos: <i class="fa fa-star" aria-hidden="true"></i><p>
	                    </li>
	                `

	        $('#teste').append(tst)
    	} else if(contact.isFavorite && contact.info.comments != "") {
	        let tst = `
	                    <li class="data-list-item">
	                        <p style="display: inline;">Nome: <p style="display: inline;">${contact.firstName} </p>| Email: ${contact.email} | Sexo: ${contact.gender} | Endereço:${contact.info.address} | Favoritos: <i class="fa fa-star" aria-hidden="true"></i> | Observações: <button class="buttonObs"><i class="fa fa-comment" aria-hidden="true"></i></button><p>
	                    </li>
	                `
/*	       	$('.testando').click(function (event) {
				let obs =  `Comentários: ${contact.info.comments}`
				console.log(event);
				let ts = event.currentTarget.parentNode.nextElementSibling;
				$(ts).empty();
				ts.append(obs);
				$(ts).toggle("slow");
			});*/
	        $("#teste").append(tst)
    	} else if(contact.isFavorite == false && contact.info.comments != "") {
	        let tst = `
	                    <li class="data-list-item">
	                        <p style="display: inline;">Nome: <p style="display: inline;">${contact.firstName}</p>| Email: ${contact.email} | Sexo: ${contact.gender} | Endereço:${contact.info.address} | Observações: <button class="buttonObs"><i class="fa fa-comment" aria-hidden="true"></i></button><p>
	                    </li>
	                `
/*	       	$('.teste').click(function (event) {
				let obs =  `Comentários: ${contact.info.comments}`
				console.log(event);
				let ts = event.currentTarget.parentNode.nextElementSibling;
				$(ts).empty();
				ts.append(obs);
				$(ts).toggle("slow");
			});*/
	        $('#teste').append(tst)
    	} else {
    		let tst = `
	                    <li class="data-list-item">
	                        <p>Nome: ${contact.firstName} | Email: ${contact.email} | Sexo: ${contact.gender} | Endereço:${contact.info.address}<p>
	                    </li>
	                `
	        $('#teste').append(tst)
    	}
    })
}
let handleGetFavorites = (data) => { //Pega data (informações) que uma função que retorna 'contatos' e para cada contato de data, incrementa na variável tst uma li com um span dentro (que contém o nome do contato), por fim usa a função append para adicionar texto na ul #teste. [faz uma verificação para saber se o contato é favorito ou não]
    data.forEach((contact) => {
    	if(contact.isFavorite) {
	        let tst = `
	                    <li class="data-list-item">
	                        <p style="text-decoration: underline;">Nome: ${contact.firstName} | Email: ${contact.email} | Sexo: ${contact.gender} | Endereço:${contact.info.address} Favoritos: <i class="fa fa-star" aria-hidden="true"></i><p>
	                    </li>
	                `
	        $('#teste').append(tst)
   		}
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

/*$('.buttonObs').click(function (event) { //deu ruim pra cacete
	//let obs =  `Comentários: ${contact.info.comments}`
	//console.log(obs);
	let name = event.currentTarget.parentNode.children[1];
	$.get(`http://localhost:3000/v1/contacts?firstName=${name}`, function(data) {
		console.log(data);
	});
	//$(ts).empty();
	//ts.append(obs);
	//$(ts).toggle("slow");
});*/

$(document).ready(function() { //Necessário para que o jQuery funcione de forma satisfatória.
	$('#listar').click(function() { //Função que lista todos os contatos e retorna-os na ul #teste e no console.
		$('#teste').empty();
		$.get('http://localhost:3000/v1/contacts', function(data) { //Usa o método GET para pegar a lista de contato na URL e retorna com a function(data) os dados dessa URL.
			handleGetContacts(data);
			console.table(data);
		});
	});
	$('#favoritos').click(function() { //Função que lista todos os contatos e retorna-os na ul #teste e no console.
		$('#teste').empty();
		$.get('http://localhost:3000/v1/contacts', function(data) { //Usa o método GET para pegar a lista de contato na URL e retorna com a function(data) os dados dessa URL.
			handleGetFavorites(data);
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
	$('#exportar').click(function () {
		$.get('http://localhost:3000/v1/contacts', function(data) {
			handleGetContacts(data);
			console.table(data);
			data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
			var a = document.createElement("a");
			document.body.appendChild(a);
			a.style = "display: none";
			a.href = 'data:' + data ;
			a.download = "data.txt";
			a.click();
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