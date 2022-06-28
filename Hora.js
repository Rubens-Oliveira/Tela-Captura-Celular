// Função para formatar 1 em 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora =
    zeroFill(now.getUTCDate()) +
    "/" +
    zeroFill(now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes());

  // Exibe na tela usando a div#clok
  document.getElementById("clock").innerHTML = dataHora;
}, 1000);
const options = {
  timeZone: "America/Brasilia",
  hour: "numeric",
  minute: "numeric",
};
const date = new Intl.DateTimeFormat([], options);
console.log(date.format(new Date()));
