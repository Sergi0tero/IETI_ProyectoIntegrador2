export const Task = (props) => {
    const { todo } = props;
    return (
        <li>
            <input id={todo.name} type="checkbox" />
            <label for={todo.name}>{todo.name}</label> 
        </li>
    )
}