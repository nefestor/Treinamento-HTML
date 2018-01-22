	function setValue(value) {
		obj = document.getElementById('tela');
		obj.value += value;
	}
	function operacao(value) {
		obj = document.getElementById('tela').value;
		objNum = document.getElementsByClass('num').value;
		objOperacao = document./*pegar elemento*/('op').value;
		objNum.value = obj.value;
		obj.value = '';
		objOperacao.value = value;
	}
	function execucao() {
		obj = document.getElementById('tela');
		objNum = document./*pegar elemento*/('num').value;
		objOperacao = document./*pegar elemento*/('op').value;
		switch (objOperacao.value) {
			case "+":
				result = parseFloat(obj.value) + parseFloat(objNum.value);
			break;
			case "-":
				result = parseFloat(objNum.value) - parseFloat(obj.value);
			break;
			case "*":
				result = parseFloat(obj.value) * parseFloat(objNum.value);
			break;
			case "/":
				result = parseFloat(objNum.value) / parseFloat(obj.value);
			break;
		}
		objNum.value = '';
		objOperacao.value = '';
		obj.value = result;
	}