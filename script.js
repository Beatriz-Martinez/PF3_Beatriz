const calcular = document.getElementById('calcular');

function calculo () {

    const nome = document.getElementById('nome').value;
    const valormen = document.getElementById('valormen').value;
    const taxa = document.getElementById('Taxa').value;
    const parcelas = document.getElementById('parcelas').value;

    if (nome !== ''&& valormen !== '' && taxa !== ''  && parcelas !== '') {

            const taxa_real = taxa/100;
            const cima = ((((1 + taxa_real )** parcelas) - 1)/taxa_real) ;
            const total = valormen * cima .toFixed(4);
      
            resultado.textContent = `${nome}, se você aplicar R$ ${valormen}, à taxa de juros de ${taxa}% ao mês, durante ${parcelas} meses, acumulará uma poupança de R$${total}`;

    }
    else {
        resultado.textContent = 'Preencha os campos.';
    }

}
calcular.addEventListener('click', calculo);