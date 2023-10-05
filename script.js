//Nome: Davi Ribeiro, Nikolas da Silva, Rodolfo Santilio

//Calculadora de valor de parcela de emprestimo com taxa fixa de 40% ao ano

//Usuario deve informar o valor do emprestimo e a quantidade de parcelas do mesmo

//valorEmprestimo - Variavel de entrada utilizada para guardar o valor do emprestimo
//quantidadeParcelas - Variavel de entrada utilizada para guardar a quantidade de parcelas
//taxaAnualFixa - Constante que guarda o valor da taxa fixa anual
//taxaMensal - Constante que guarda o valor da taxa mensal
//valorParcela - Variavel que guarda o valor das parcelas mensais
//valorTotalPago - Variavel que guarda o valor total pago do emprestimo
//mensalDiv - Variavel utilizada para escrever o valor das parcelas em uma div
//totalDiv - Variavel utilizada para escrever o valor total pago em um div

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
  const taxaAnualFixa = 0.4; // 40% ao ano
  const taxaMensal = taxaAnualFixa / 12;

//Cálculo da parcela
  var valorParcela =
    (valorEmprestimo *
      taxaMensal * Math.pow(1 + taxaMensal, quantidadeParcelas)) /
    (Math.pow(1 + taxaMensal, quantidadeParcelas) - 1 );

//Calculando o total pago do emprestimo
  var valorTotalPago = valorParcela * quantidadeParcelas;

//Colocando o resultado dentro das divs
  var mensalDiv = document.getElementById("mensal");
  mensalDiv.innerHTML = "R$" + valorParcela.toFixed(2);
  var totalDiv = document.getElementById("total");
  total.innerHTML = "R$" + valorTotalPago.toFixed(2);
}
