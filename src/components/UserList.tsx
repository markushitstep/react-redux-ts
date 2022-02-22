import { useEffect } from "react"
import { useActions } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"



export const UserList: React.FC = () => {

    const { users, error, isLoading } = useTypeSelector(state => state.users)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers();
    }, [])

    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    )
} 