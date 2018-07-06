const initState = {

}

const headerState = (state = initState, action) => {
    switch (action.type) {
        case '':
            return {...state, ...action.payload }
        default:
            return state;
    }
}

export default headerState
