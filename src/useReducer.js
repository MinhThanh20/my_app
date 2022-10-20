import React, { useReducer} from "react";
// useReducer()
// 1. init state = 0
// 2. Action : Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

//init state
const initState = 0
// Action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// Reducer
const reducer=(state, action)=> {
    switch (action){
        case DOWN_ACTION:
            return state -1
        case UP_ACTION:
            return state +1
        default :
            throw new Error("invalid action")
    }

}
function useReducers(){
    const [count, dispatch] = useReducer(reducer, initState)
    // dispatch nó là hành động giúp 1 action đc kích hoạt giúp state thay đổi và render lại component app
    return (
        <>
        <div style={{padding : '0 20px'}}>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(DOWN_ACTION)}>
                DOWN
            </button>
            <button onClick={()=> dispatch(UP_ACTION)}>
                UP
            </button>

        </div>
        </>
    )
}
export default useReducers;