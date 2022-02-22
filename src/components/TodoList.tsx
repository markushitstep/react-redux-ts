import { useEffect } from "react"
import { useActions } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"



export const TodoList: React.FC = () => {

    const { todos, page, isLoading, error, limit } = useTypeSelector(state => state.todos)
    const { fetchTodos, setTodoPage } = useActions()
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div 
                        onClick={() => setTodoPage(p)} 
                        style={{ border: p === page ? '2px solid green' : "1px solid gray", padding: 10 }}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
} 
