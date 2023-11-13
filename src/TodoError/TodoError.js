import React from "react";
import './TodoError.css'
import errorImg from '../Img/error.gif'

function TodoError() {
    return (
        <div className="errorImgContainer">
            <img className="errorImg" src={errorImg} alt="Error" />
            <p className='errorTodoText'>Lo sentimos, ha habido un ERROR!!!</p>
        </div>
    );
}

export { TodoError };