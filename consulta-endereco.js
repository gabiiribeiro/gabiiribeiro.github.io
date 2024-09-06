function consultarCEP(cep) {
    if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => preencherCampos(data))
        .catch(error => console.error('Erro:', error));
    }
  }

  function preencherCampos(dados) {
    document.getElementById('RUA').value = dados.logradouro || '';
    document.getElementById('BAIRRO').value = dados.bairro || '';
    document.getElementById('CIDADE').value = dados.localidade || '';
    document.getElementById('ESTADO').value = dados.uf || '';
  }