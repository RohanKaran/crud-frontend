import TodoItem from "./Todo";

export default function TodoView(props) {
    return (
        <div>

                {props.todoList.map(todo => <TodoItem todo={todo} />)}

        </div>
    )
}
