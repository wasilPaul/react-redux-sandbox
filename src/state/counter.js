
//action types description
const INC = 'counter/INC'
const DEC = 'counter/DEC'
const MULT = 'multip/MULT'
const DIVI = 'multip/DIVI'

//action creator declaration
export const inc = (number = 1) => ({ type: INC, number })
//export const inc = () => ({ type: INC })
export const dec = (number = 1) => ({ type: DEC, number: number })
//export const dec = () => ({ type: DEC})
export const multi = (number) => ({ type: MULT, number })
export const divi = (number) => ({ type: DIVI, number: number === 0 ? 1 : number })


//initial state - state that is present before any action will be descriped
const initialState = 1

//state = initial state -> default value for state parameter
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + action.number
            //return state + 1
        case DEC:
            return state - action.number
            //return state - 1
        case MULT:
            return state * action.number
        case DIVI:
            return state / action.number
        default:
            return state
    }
}