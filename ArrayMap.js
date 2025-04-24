const valores = [1, 2, 3, 4, 5]

// Multiplicando tudo por 2
let transformado = valores.map(n => n * 2)
console.log(transformado)

const adicionaDez = n => n + 10
const vezesTres = n => n * 3
const emReais = n => `R$ ${n.toFixed(2).replace('.', ',')}`

const resultadoFinal = valores
  .map(adicionaDez)
  .map(vezesTres)
  .map(emReais)

console.log(resultadoFinal)



Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)