import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        } else {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        }
  
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 5000);
  },[])
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };



/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Llorar con la Llorona', completed: false},
  { text: 'Jugar videojuegos', completed: false},
]
const stringTodos = JSON.stringify(defaultTodos)
localStorage.setItem('TODOS_V1',stringTodos);
localStorage.removeItem('TODOS_V1'); */