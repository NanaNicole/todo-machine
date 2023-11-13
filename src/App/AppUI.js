import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoEmpty } from '../TodoEmpty/TodoEmpty';
import { TodoError } from '../TodoError/TodoError';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import '../index.css'
import { TodoForm } from '../TodoForm/TodoForm';
import { Modal } from '../Modal';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const {
    searchedTodos,
    deleteTodo,
    completeTodo,
    loading,
    error,
    openModal,
  } = useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!error && !loading && searchedTodos.length === 0 && <TodoEmpty />}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
      {
        openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
  );
}

export { AppUI };