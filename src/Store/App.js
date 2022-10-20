
import { useStore, actions } from ".";

function App() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }
    console.log(todos);
    return (
        <div>
            <input
                value={state.todoInput}
                placeholder="Enter todo"
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))

                }}
            />
            <button onClick={handleAdd} >ADD</button>

        </div>
    )
}
export default App