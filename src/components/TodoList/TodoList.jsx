import { useState } from "react"
import AddTodo from "../AddToto/AddTodo"

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'1', text:'공부하기', status:'active'},
        {id:'2', text:'학원가기', status:'active'}
    ])
    const handleAdd = (todo) => {
        // 새로운 Todo를 todos에 업데이트
        setTodos([...todos, todo]);
    }
    return(
        <section>
            <ul>
                {
                    todos.map((item)=> {
                        return(
                            <li key={item.id}>{item.text}</li>
                        )
                    })
                }
            </ul>
            <AddTodo onAdd={ handleAdd }/>
        </section>
    )
}