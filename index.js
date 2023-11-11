
function d1(){
  document.getElementById('d2').style.display = 'none'  
  document.getElementById('d3').style.display = 'flex'  
  document.getElementById('mes').innerHTML = "Dezembro"
}
function d3(){
  document.getElementById('d2').style.display = 'flex'  
  document.getElementById('d3').style.display = 'none'  
  document.getElementById('mes').innerHTML = "Novembro"
}  
const inp = document.getElementById('texto')

function d5(){
  document.getElementById('resp').innerHTML = inp.value
 localStorage.text = inp.value
}
document.getElementById('resp').innerHTML = localStorage.text











document.getElementById("itemInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      addItem();
  }
});

document.getElementById("itemList").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
      removeItem(event.target);
  }
});



function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemList = document.getElementById("itemList");

  if (itemInput.value.trim() === "") {
      showError("Por favor, insira um item.");
      return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
      <span>${itemInput.value}</span>
      <button>Remover</button>
  `;
  li.querySelector("button").addEventListener("click", function () {
      removeItem(this);
  });
  itemList.appendChild(li);

  itemInput.value = "";
}

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.textContent = message;

  const container = document.querySelector(".container");
  container.insertBefore(errorDiv, container.firstChild);

  setTimeout(function () {
      errorDiv.remove();
  }, 3000);
}
function b5(){
  document.getElementById('b7').style.display = 'block'
}
function closer(){
  document.getElementById('b7').style.display = 'none'
}
function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemList = document.getElementById("itemList");

  if (itemInput.value.trim() === "") {
      showError("Por favor, insira um item.");
      return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = itemInput.value;
  li.appendChild(span);

  const button = document.createElement("button");
  button.textContent = "Remover";
  button.addEventListener("click", function () {
      removeItem(this);
  });
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}


function removeItem(button) {
  const li = button.parentNode;
  const itemList = document.getElementById("itemList");
  itemList.removeChild(li);
}
