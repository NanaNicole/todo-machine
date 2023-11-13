import React, { useContext, useState } from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css';
import ModalImg from '../Img/modal.png'
import ModalImg1 from '../Img/modal_1.png'
import ModalImg2 from '../Img/modal_2.png'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="ModalForm">
            <div className="ModalImages">
                <img src={ModalImg} className="ModalImg" alt="ModalImg" />
                <img src={ModalImg1} className="ModalImg" alt="ModalImg" />
                <img src={ModalImg2} className="ModalImg" alt="ModalImg" />
            </div>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                rows={5} 
                value={newTodoValue} 
                placeholder="Escribe el TODO aquí"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}>
                        Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };