function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log('Prev', prevState);
        console.log('Action', action)

        const nextState = reducer(prevState, action)
        console.log('Next State', prevState);
        console.groupEnd()
        return nextState
    }

}
export default logger