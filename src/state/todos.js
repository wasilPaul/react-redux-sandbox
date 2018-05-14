const ADD = 'todoes/ADD'
const DEL = 'todoes/DEL'

export const add = (taskText) => ({ type: ADD, taskText })
export const del = (index) => ({ type: DEL, index })

const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return action.taskText ?
                state.concat({
                    text: action.taskText,
                    compleated: false
                })
                :
                state
        case DEL:
            return state.filter((task, idx) => idx !== action.index)
        default:
            return state

    }
}