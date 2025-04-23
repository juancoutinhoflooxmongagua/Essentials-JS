const nomes = ["Ana", "Bruno", "Clara"];

const contexto = {
  saudacao: "Olá"
};

function cumprimentar(nome, indice) {
  console.log(`${this.saudacao}, ${indice + 1}º ${nome}`);
}

nomes.forEach(cumprimentar, contexto);
