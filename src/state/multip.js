//nazwy akcji
const MULT = 'multip/MULT'
const DIVI = 'multip/DIVI'

//kreatory akcji:
export const multi = (number) => ({ type: MULT, number })
export const divi = (number) => ({ type: DIVI, number: number === 0 ? 1 : number })

const initaialState = 1

//reducer przyjmuje stan i akcje, reducer zwraca stan po akcji lub aktualny
export default (state = initaialState, action) => {
    //w reducerzez nie musi byc switch moze byc dowolna akcja, switchujemu poniewaz chcemy rozne typy akcji
    switch (action.type) {
        case MULT:
            return state * action.number
        case DIVI:
            return state / action.number
        default:
            return state
    }
}