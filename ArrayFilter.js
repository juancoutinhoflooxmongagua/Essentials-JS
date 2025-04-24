const products = [
    { nome: 'notebook', price: 2999, fragil: true }
    
    { nome: 'tv', price: 2999, fragil: true }
    { nome: 'cell', price: 2999, fragil: false }
]

console.log(
    products.filter(function (p) {
        return p.price > 2400 
    })
)



Array.prototype.meuFiltro = function(fn) {
    const filtrados = []
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        filtrados.push(this[i])
      }
    }
    return filtrados
  }
  
  const estoque = [
    { nome: 'Notebook', preco: 2499, categoria: 'eletrônico' },
    { nome: 'iPad Pro', preco: 4199, categoria: 'tablet' },
    { nome: 'TV Samsung', preco: 1999, categoria: 'eletrônico' },
    { nome: 'Celular Xiaomi', preco: 1500, categoria: 'eletrônico' },
    { nome: 'Copo de Vidro', preco: 12.49, categoria: 'cozinha' },
    { nome: 'Copo de Plástico', preco: 18.99, categoria: 'cozinha' }
  ]
  
  const ehGadget = item => 
    /notebook|tv|celular/i.test(item.nome)
  
  const resultado = estoque.meuFiltro(ehGadget)
  console.log(resultado)
  