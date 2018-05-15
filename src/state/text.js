
const NEW_TEXT_CHANGED = 'todos/NEW_TEXT_CHANGED'

export const newTextChanged = (newText) => ({ type: NEW_TEXT_CHANGED, newText })

const initialState = {
    newTaskText: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_TEXT_CHANGED:
            return {
                newTaskText: action.newText
            }
        default:
            return state
    }
}