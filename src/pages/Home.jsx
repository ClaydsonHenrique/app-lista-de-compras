import React from 'react'

export default function Home() {

  const produtos = [{
    listNames: 'Compras mes Abril', compras: [{ produto: 'acem', medida: 'kg', categoria: 'carne' },
    { produto: 'alcatra', medida: 'kg', categoria: 'carne' },
    { produto: 'coxinha', medida: 'kg', categoria: 'carne' },

    { produto: 'arroz', medida: 'kg', categoria: 'grãos' },
    { produto: 'arroz', medida: 'unidade', categoria: 'grãos' },

    { produto: 'feijão carioca', medida: 'kg', categoria: 'grãos' },
    { produto: 'feijão carioca', medida: 'unidade', categoria: 'grãos' },

    { produto: 'macarrão', medida: 'unidade', categoria: 'massas' },

    { produto: 'leite integral', medida: 'unidade', categoria: 'laticínios' },
    { produto: 'queijo mussarela', medida: 'kg', categoria: 'laticínios' },
    { produto: 'queijo mussarela', medida: 'unidade', categoria: 'laticínios' },
    { produto: 'iogurte natural', medida: 'unidade', categoria: 'laticínios' },

    { produto: 'banana', medida: 'kg', categoria: 'frutas' },
    { produto: 'maçã', medida: 'kg', categoria: 'frutas' },
    { produto: 'laranja', medida: 'kg', categoria: 'frutas' },

    { produto: 'alface', medida: 'unidade', categoria: 'verduras' },
    { produto: 'tomate', medida: 'kg', categoria: 'verduras' },
    { produto: 'cenoura', medida: 'kg', categoria: 'verduras' },

    { produto: 'óleo de soja', medida: 'unidade', categoria: 'óleo e azeite' },
    { produto: 'açúcar', medida: 'unidade', categoria: 'açúcar e adoçantes' },
    { produto: 'sal refinado', medida: 'unidade', categoria: 'temperos' },

    { produto: 'pão francês', medida: 'unidade', categoria: 'padaria' },
    { produto: 'café torrado', medida: 'unidade', categoria: 'bebidas' },
    { produto: 'refrigerante cola', medida: 'unidade', categoria: 'bebidas' }]
  }]





  return (
    <section>
      <h1>Suas Listas de Compras</h1>

      {
        produtos.map((produto) => (
          <div key={produto.listNames}>
            <div>
              <p>{produto.listNames}</p>
            </div>
            <div>
              <p>Progresso</p>
              <p>{produto.compras.length}</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$0,00</p>
            </div>
          </div>
        ))}

    </section>
  )
}
