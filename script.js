
//Chamando função
function calcularEmprestimo() {
  
//Pegando variáveis apartir do ID
  var valorEmprestimo = parseFloat(
    document.getElementById("valorEmprestimo").value
  );
  var quantidadeParcelas = parseInt(
    document.getElementById("quantidadeParcelas").value
  );

//Garantindo que os campos não tenham valores inválidos  
  if (
    isNaN(valorEmprestimo) ||
    isNaN(quantidadeParcelas) ||
    quantidadeParcelas <= 0 ||
    quantidadeParcelas > 96
  ) {
    alert("Por favor, informe valores válidos.");
    return;
  }

//Definindo as taxas anuais e mensais
  var taxaAnualFixa = 0.4; // 40% ao ano
  var taxaMensal = taxaAnualFixa / 12;

//Cálculo da parcela
  var valorParcela =
    (valorEmprestimo *
      (taxaMensal * Math.pow(1 + taxaMensal, quantidadeParcelas))) /
    (Math.pow(1 + taxaMensal, quantidadeParcelas) - 1);

//Calculando o total pago do emprestimo
  var valorTotalPago = valorParcela * quantidadeParcelas;

//Colocando o resultado dentro das divs
  var mensalDiv = document.getElementById("mensal");
  mensalDiv.innerHTML = "R$" + valorParcela.toFixed(2);
  var totalDiv = document.getElementById("total");
  total.innerHTML = "R$" + valorTotalPago.toFixed(2);
}
