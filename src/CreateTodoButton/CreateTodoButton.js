import { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {
    setOpenModal,
    openModal
  } = useContext(TodoContext)
  return (
    <button className='CreateTodoButton' onClick={() => {setOpenModal(!openModal);}}>+</button>
  )
}
export { CreateTodoButton };