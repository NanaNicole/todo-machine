import React, { useContext } from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total,
  } = useContext(TodoContext)
  return (
    <>
      {
        completed !== total ? (
          <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
          </h1>
        ) : (
          <h1 className='TodoCounter'>
            Felicitaciones !!!!  Has terminado todos los TODOs.
          </h1>
        )
      }
    </>
  )
}

export {TodoCounter};