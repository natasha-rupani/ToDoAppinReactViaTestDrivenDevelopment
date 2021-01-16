import ToDoItem from "./TodoItem";

const TodoList = ({ todos, removeHandler, updateTodo }) => {
    return ( 
    <div>
        {todos.map((t,i) => (
            <ToDoItem key={i} todo={t} removeHandler={removeHandler} updateTodo={updateTodo}/>
        ))}
    </div> );
}
 
export default TodoList;