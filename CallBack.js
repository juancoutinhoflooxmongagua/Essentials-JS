const nomes = ["Ana", "Bruno", "Clara"];

const contexto = {
  saudacao: "Olá"
};

function cumprimentar(nome, indice) {
  console.log(`${this.saudacao}, ${indice + 1}º ${nome}`);
}

nomes.forEach(cumprimentar, contexto);

/* Callback */

const medias = [5.5, 7.8, 6.2, 9.1, 4.3, 8.0];

// Cálculo da média geral
const mediaGeral = medias.reduce((acc, val) => acc + val, 0) / medias.length;

// Sem callback
const abaixoDaMedia1 = [];
for (let i in medias) {
  if (medias[i] < mediaGeral) {
    abaixoDaMedia1.push(medias[i]);
  }
}
console.log('Sem callback:', abaixoDaMedia1);

// Com callback direto
const abaixoDaMedia2 = medias.filter(function (valor) {
  return valor < mediaGeral;
});
console.log('Com callback:', abaixoDaMedia2);

// Com arrow + função externa
const menorQueMedia = m => m < mediaGeral;
const abaixoDaMedia3 = medias.filter(menorQueMedia);
console.log('Com arrow:', abaixoDaMedia3);


// Callback no Navegador
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('it running')
  }