import React, { useReducer } from "react";
// init state
const initState = {
    job: '',
    jobs: []
}
// Action 
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }

}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }

}
// Reducer
const reducer = (state, action) => {

    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        default:
            throw new Error('invalid action')

    }

    return newState


}
function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
    }
    return (
        <>
            <div style={{ padding: '0 20px' }}>
                <h3>Todo</h3>
                <input
                    value={job}
                    placeholder="Enter todo ..."
                    onChange={e => {
                        dispatch(setJob(e.target.value))
                    }} />
                <button onClick={handleSubmit}>ADD</button>
                <ul>
                    {jobs.map((job, index) => {
                        return (

                            <li key={index}> {job} &times;</li>
                        )
                    })}
                </ul>

            </div>
        </>
    )
}
export default TodoApp