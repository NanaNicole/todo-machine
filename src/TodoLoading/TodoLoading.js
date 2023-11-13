import React from "react";
import './TodoLoading.css'

import loadingGif from '../Img/loading.gif'

function TodoLoading() {
    return (
        <div className='loadingContainer'>
            <img className='loadingGif' src={loadingGif}/>
        </div>
    );
}

export { TodoLoading }