import React from 'react'
import Inputs from '../components/Inputs'

export default function CreatListPage() {
  const [nameList, setNameList] = React.useState('');
  
  const handleChange = ({ target }) => {
    setNameList(target.value);
  }

  return (
    <section>
      <h2>Nome da lista</h2>
      <Inputs name={'nameList'} type={'text'} onChange={handleChange} value={nameList} />
    </section>
  )
}
