const resultado = document.querySelector("#resultado");

//arrow function não acessa 'arguments'

let myFunc = {
  showArguments() {
    resultado.innerHTML = arguments;
    console.log(arguments);
  },
};

myFunc.showArguments(
  "BMW",
  "AUDI",
  "MERCEDES",
  "BENTLEY",
  "FERRARI",
  "LAMBORGHINI"
);
//arrow function não possui ou não acessa arguments.
let myFunc2 = {
  showArguments2: () => {
    resultado.innerHTML = arguments;
    console.log(arguments);
  },
};
// myFunc2.showArguments2(
//   "Corsa",
//   "Escort",
//   "Uno",
//   "Santana",
//   "Gol",
//   "Fusca",
//   "Kombi"
// );



let user = {
    name: "Thais Nascimento",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },

        usandoNominal() {
            console.log(`Meu nome é ${this.name}, com Nominal Function.`);
            },

};

user.usandoArrow();
user.usandoNominal();

//this não existe na ArrowFunction. orientação objeto tambem nao tem metodo constutor.


let soma = (a,b) =>{
    console.log(a + b);
    }

    let soma2 = function(a,b){
        console.log(a + b);
    }

    
    new soma2(50, 20);

    
    