function calcularEmprestimo() {
  var valorEmprestimo = parseFloat(
    document.getElementById("valorEmprestimo").value
  );
  var quantidadeParcelas = parseInt(
    document.getElementById("quantidadeParcelas").value
  );

  if (
    isNaN(valorEmprestimo) ||
    isNaN(quantidadeParcelas) ||
    quantidadeParcelas <= 0 ||
    quantidadeParcelas > 96
  ) {
    alert("Por favor, informe valores válidos.");
    return;
  }

  var taxaAnualFixa = 0.4; // 40% ao ano
  var taxaMensal = taxaAnualFixa / 12;

  var valorParcela =
    (valorEmprestimo *
      (taxaMensal * Math.pow(1 + taxaMensal, quantidadeParcelas))) /
    (Math.pow(1 + taxaMensal, quantidadeParcelas) - 1);
  var valorTotalPago = valorParcela * quantidadeParcelas;

  var mensalDiv = document.getElementById("mensal");
  mensalDiv.innerHTML = valorParcela.toFixed(2);

  var totalDiv = document.getElementById("total");
  total.innerHTML = valorTotalPago.toFixed(2);
}
