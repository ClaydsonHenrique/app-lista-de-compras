import React from 'react'
import Inputs from '../components/Inputs'

export default function CreateList() {
  const [itemName, setItemName] = React.useState('')
  const [quantity, setQuantity] = React.useState('')
  const [unidade, setUnidade] = React.useState('')
  const [price, setPrice] = React.useState('')


  return (
    <section>
      <h1>Adicionar item a lista</h1>
      <div>
        <label htmlFor="produto">
          produto
          <Inputs type={'text'} name={'itemName'} value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label htmlFor="quantidade">
          quantidade
          <Inputs type={'text'} name={'quantity'} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <label htmlFor="unidade">
          unidade
          <Inputs type={'text'} name={'unidade'} value={unidade} onChange={(e) => setUnidade(e.target.value)} />
        </label>
        <label htmlFor="preço">
          preço
          <Inputs type={'text'} name={'price'} value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
      </div>
    </section>
  )
}
