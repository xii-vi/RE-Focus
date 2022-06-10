import { useTodo } from "../../context/todoContext";
import { useState } from "react";
export const TodoModal = ({setShowModal}) => {
    const [todo, setTodo] = useState("");
    const { todoList, addTodoHandler, todoCheckHandler, deleteTodoHandler } = useTodo();

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            addTodoHandler(todo)
            setTodo("")
        }
    }
    const checkboxHandler = (todo) => {
        todoCheckHandler(todo)
    }

    const deleteHandler = (id) => {
        deleteTodoHandler(id)
    }
    return (
        <>
            <div >
            <div className='modal-container'>
                <h4>Todos List</h4>
                <button className="close-btn edit-btn" onClick={() => setShowModal(false)}>
                    <i className="fas fa-times-circle"></i>
                </button>
                </div>
                <div>
                {todoList?.map(todo =>
                    <div className='text-align-left' key={Math.random()}>
                        <label className={`${todo.isComplete && "line-through"}`}>
                            <input
                                type="checkbox"
                                checked={todo?.isComplete} onChange={() => checkboxHandler(todo)}
                            />
                            {todo.task}
                        </label>
                        <button className="edit-btn close-btn" onClick={() => deleteHandler(todo.id)}>
                        <i className="fas fa-trash"></i>
                        </button>
                    </div>)}
            </div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={keyDownHandler}
                placeholder="Add todo"
                className="input-container-todo"
            />
            </div>
        </>
    )
}