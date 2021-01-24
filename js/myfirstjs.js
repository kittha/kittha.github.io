function message(msg) {
  document.getElementById('output').innerHTML = "display event " + msg;
}

function setDate() {
  document.getElementById('date').innerHTML = Date();
}

function setConsole(msg) {
  console.log(msg);
}