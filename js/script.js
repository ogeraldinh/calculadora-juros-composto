function calcular_juros() {
  let valor = document.getElementById("valor_inicial").value;
  let taxa_mes = document.getElementById("taxa_mes").value / 100;
  let rendimento_mes = document.getElementById("rendimento_mes").value;

  let total = valor * (1 + taxa_mes) ** rendimento_mes;
  document.getElementById("total").innerHTML =
    "R$ " + total.toFixed(2).replace(".", ",");
}
