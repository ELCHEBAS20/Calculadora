

document.getElementById('btn_accion').addEventListener('click', () => {
  let valor = document.getElementById('btnvalor').value;
  let valor2 = document.getElementById('btnvalor2').value;
  console.log(parseFloat(valor) * valor2);
})

