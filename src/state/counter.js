
//action typec description
const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creator declaration
export const inc = (number) => ({ type: INC, number: number })
export const dec = (number) => ({ type: DEC, number: number })

//initial state - state that is present before any action will be descriped
const initialState = 0

//state = initial state -> default value for state parameter
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            
            return state + action.number
        case DEC:
            
            return state - action.number
        default:
            return state
    }
}