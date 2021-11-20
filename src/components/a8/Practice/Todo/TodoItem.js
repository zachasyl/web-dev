const TodoItem = ({
//this is just a default
  todo = {
      done: true,
      title: 'Buy milk',
      status: 'COMPLETED'
  }
}) => {
    return(
        <li>
            <input type="checkbox"
                defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;
