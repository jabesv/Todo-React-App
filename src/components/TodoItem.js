const TodoItem =(props) => {
    const {title, price, description} = props.todos 
    return(
        <div>
            <h3> {title} </h3>
            <h2>$ {price} </h2>
            <h3> {description} </h3>
        </div>
    )
}

export default TodoItem