const ADD = 'todoes/ADD'
const DEL = 'todoes/DEL'
const NEW_TASK_TEXT_CHANGED = 'todos/NEW_TASK_TEXT_CHANGED'

export const add = (taskText) => ({ type: ADD, taskText })
export const del = (index) => ({ type: DEL, index })
export const newTaskTextChanged = (newText) => ({
    type: NEW_TASK_TEXT_CHANGED,
    newText
})

const initialState = {
    tasks: [],
    newTaskText: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return action.taskText ?
                {
                    ...state,
                    tasks: state.tasks.concat({
                        text: action.taskText,
                        compleated: false
                    })
                }
                :
                state
        case DEL:
            return {
                ...state,
                tasks: state.tasks.filter((task, idx) => idx !== action.index)
            }
            case NEW_TASK_TEXT_CHANGED:
            {
                return{
                    ...state,
                    newTaskText: action.newText
                }

            }
        default:
            return state
    }
}