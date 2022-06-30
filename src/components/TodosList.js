import TodoItem from './TodoItem'

const TodosList = (props) => {
    //console.log(props.todos);
    return (
     <div>
        <h2>Todos</h2>
        {/* {Here we map over the array} */}
        {props.todos.map((item, idx) => <TodoItem todos= {item} key = {idx} /> )}
    </div>
        
    )
}

export default TodosList