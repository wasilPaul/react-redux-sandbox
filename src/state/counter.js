
//action typec description
const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creator declaration
export const inc = () => ({ type: INC })
export const dec = () => ({ type: DEC })

//initial state - state that is present before any action will be descriped
const initialState = 0

//state = initial state -> default value for state parameter
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + 1
        case DEC:
            return state - 1
        default:
            return state
    }
}