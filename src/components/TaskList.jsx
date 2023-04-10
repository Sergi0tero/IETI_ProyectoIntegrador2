import { Task } from "./Task";

export const TaskList = (props) => {
    const {todoList} = props;
    return (
        <ul>
            {todoList.map((task) => (
                <Task todo={task} />
            ))}
        </ul>
    );
}
 {/* <Task prueba = {todoList[0]}></Task>
            <Task prueba = {todoList[1]}></Task> */}