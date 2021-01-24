function message(msg) {
  document.getElementById('output').innerHTML = "display event " + msg;
}

function setDate() {
  document.getElementById('date').innerHTML = Date();
}

function setConsole(msg) {
  console.log(msg);
}

function closeMe() {
  x = document.getElementById('demo');
  // x.style.display="none";
  x.className="closed";
}

function openMe() {
  x = document.getElementById('demo');
  // x.style.display="block";
  x.className="opened";
}