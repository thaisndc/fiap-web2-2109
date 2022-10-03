const carros = document.querySelector("#carros");
//document.getElementById - sempre existiu...
//document.querySelector - mais recente... permite usar seletores do ss3.
const carrosArray = ["Chevrolet", "Fiat", "Ford", "Honda", "Hyundai", "Kia", "Mazda", "Mercedes-Benz", "Nissan", "Peugeot", "Renault", "Toyota", "Volkswagen"];

carrosArray.forEach((value, key) => {
    carros.innerHTML += `<option value="${key}">${value}</option>`;
  });
  
  carrosArray.forEach((value) => console.log(value));
  
  const importados = [
    ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
    ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
    ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
  ];
  
  importados.forEach((marcas) => {
    const select = document.createElement("select");
    select.setAttribute("id", marcas[0]);
    marcas.forEach((carros, key) => {
      select.innerHTML += `<option value="${carros}">${carros}</option>`;
    });
    document.querySelector("body").appendChild(select);
  });



  const aereas = [
    "Latam",
    "Gol",
    "Azul",
    "Delta",
    "American Airlines",
    "Emirates",
    "Qatar",
  ];
  
  const comboAereas = document.createElement("select");
  comboAereas.setAttribute("id", "aereas");
  
  aereas.forEach((aerea, key) => {
    comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
  });
  //adicione este combo como um filho no body, no final de todas as tags.
  document.querySelector("body").appendChild(comboAereas);
  const menu = [
    "Todos",
    "Venda na Amazon",
    "Ofertas do Dia",
    "Prime",
    "Eletrônicos",
    "Ideias para Presente",
    "Brinquedos e Jogos",
    "Computadores",
    "eBooks Kindle",
    "Games",
    "Ferramentas e Construção",
    "Livros",
  ];
  
  const ulMenu = document.createElement("ul");
  ulMenu.setAttribute("id", "menu");
  ulMenu.setAttribute("class", "menu-site");
  
  menu.forEach((value, index) => {
    ulMenu.innerHTML += `<li>${value}</li>`;
  });
  
  document.querySelector("nav").appendChild(ulMenu);





  const const carros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "Peugeot 308"];

//adicionar um elemento NO FINAL do array. Push
newCarros.push("Celta", "Monza");

//adicionar um elemento NO INÍCIO do array. Unshift
newCarros.unshift("Fusca");

//remover um elemento do FINAL do array. Pop
const ultimo = newCarros.pop(); //retorna o elemento removido

const primeiro = newCarros.shift(); //retorna o elemento removido

const nomeCompleto = "Thais Nascimento da Costa";
const nomeArray = nomeCompleto.split(" ");
const americanName = [nomeArray.at(-1), nomeArray[0]].join(", ");
// THAIS N DA COSTA
// COSTA, THAIS


const removeUm = newCarros.splice(0, 3);

console.log(removeUm, "Remove um, splice");
console.log(americanName, "Formato americano");
console.log(newCarros, "NewCarros");

//push, pop
//shift, unshift
//splice
//split
//join

// Programação funcional
//slice
//map
//filter
//find