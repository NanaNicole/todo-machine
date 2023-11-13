import './TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      ></span>
      <p className={`TotoItem-p ${completed && "TodoItem-p--completed"}`}>{text}</p>
      <span className="Icon Icon-delete" onClick={onDelete}></span>
    </li>
  )
}
export { TodoItem };
