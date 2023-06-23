// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleteTodo} = props
  const {title, id} = item

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="item">
      <p className="title">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
