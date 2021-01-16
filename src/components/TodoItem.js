import styles from './TodoItem.modules.css';

const ToDoItem = ({ todo, removeHandler, updateTodo }) => {
    return ( 
    <div className={styles.itemcontainer}  >
        <div>
            <input
            type="checkbox"
            name= {`checkbox-${todo.id}`}
            checked={todo.completed}
            data-testid={`checkbox-${todo.id}`}
            onChange={()=> updateTodo(todo.id)}
            />
            <label
            htmlFor= {`checkbox-${todo.id}`}
            onClick= {()=> updateTodo(todo.id)}
            className={todo.completed? styles.completed: ''}
            >
                {todo.title}
            </label>
            <button
            className={styles.closeBtn}
            data-testid={`close-btn-${todo.id}`}
            onClick = {() => removeHandler(todo.id)}
            >
                X
                </button> 
        </div>
       
    </div>
    );
}
export default ToDoItem;