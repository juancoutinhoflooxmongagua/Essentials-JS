// Caso 1: this no escopo global

console.log('Caso 1:', this); // Em browser: window | Em Node: {}


// Caso 2: this em função comum

function logThis() {
  console.log('Caso 2:', this);
}
logThis(); // window (sem strict) | undefined (com strict)


// Caso 3: this dentro de um método de objeto

const carro = {
  marca: 'Toyota',
  mostrarMarca() {
    console.log('Caso 3:', this.marca);
  }
};
carro.mostrarMarca(); // 'Toyota'

// Caso 4: função isolada referenciada por objeto

function exibirUsuario() {
  console.log('Caso 4:', this.nome);
}
const conta = {
  nome: 'Júlia',
  verNome: exibirUsuario
};
conta.verNome(); // 'Júlia'

// Caso 5: arrow function dentro de objeto

const perfil = {
  nome: 'Carlos',
  mostrar: () => {
    console.log('Caso 5:', this.nome);
  }
};
perfil.mostrar(); // undefined

// Caso 6: bind, call e apply
function saudacao() {
  console.log('Caso 6:', `Bem-vindo, ${this.nome}`);
}
const cliente = { nome: 'Renata' };
saudacao.call(cliente);    // 'Bem-vindo, Renata'
saudacao.apply(cliente);   // 'Bem-vindo, Renata'
const saudacaoRenata = saudacao.bind(cliente);
saudacaoRenata();          // 'Bem-vindo, Renata'

// Caso 7: this em eventos do DOM
/*
<button id="disparar">Disparar</button>
<script>
  const btn = document.getElementById('disparar');

  btn.addEventListener('click', function () {
    console.log('Caso 7 - função normal:', this); // o botão
  });

  btn.addEventListener('click', () => {
    console.log('Caso 7 - arrow function:', this); // escopo externo
  });
</script>

*/
