import { useState } from 'react'
import { TodoModal } from './todoModal'
export const Todos = () => {
    const [showModal, setShowModal] = useState("")
    return (
        <div className='todo-container'>
            {showModal && <TodoModal setShowModal={setShowModal} />}
            {!showModal && <button
                className='edit-btn'
                onClick={() => setShowModal(pre => !pre)}>Add Todo</button>}
        </div>
    )
}