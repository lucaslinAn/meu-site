console.log("test")
function atualizarRelogio(){
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2,0)
const minutos = String(agora.getMinutes()).padStart(2,0)
const segundos =  String(agora.getSeconds()).padStart(2,0)
const relogio = horas + ":" + minutos + ":" + segundos


document.getElementById("relogio").textContent = relogio
}

setInterval(atualizarRelogio, 1000)
function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Função para iniciar a contagem regressiva
let intervalId;
function iniciarContagem() {
  clearInterval(intervalId);

  const dataSelecionada = document.getElementById('dataSelecionada').value;
  if (!dataSelecionada) {
    alert("Selecione uma data!");
    return;
  }

  const dataFim = new Date(dataSelecionada);
  intervalId = setInterval(() => {
    const agora = new Date();
    const diferenca = dataFim - agora;

    if (diferenca <= 0) {
      clearInterval(intervalId);
      document.getElementById('contador').textContent = "Chegou o dia!";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('contador').textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
}
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let date_ini = new Date(document.form_main.date_ini.value);
  let date_end = new Date(document.form_main.date_end.value);

  let diff = date_end.getTime() - date_ini.getTime();

  document.getElementById('days').innerText = Math.floor(diff / day);
}
