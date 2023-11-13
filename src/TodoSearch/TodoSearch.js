import React, { useContext } from 'react';
import './TodoSearch.css'

import searchImg  from '../Img/hogar.png'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext)
  return (
      <>
        <div className='searchImgContainer'>
          <img className='searchImg' src={searchImg} alt='Imagen Buscar' />
        </div>
        <input placeholder="Buscar" className='TodoSearch' 
        onChange={(event) => setSearchValue(event.target.value)} value={searchValue}/>
      </>
  )
}
export { TodoSearch };