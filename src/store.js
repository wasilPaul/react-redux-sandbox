import { createStore, combineReducers } from 'redux'
import counter, { inc, dec, multi, divi } from './state/counter'
import todos, {add, del} from './state/todos'
//import multip, {multi, divi} from './state/multip'

const reducer = combineReducers({
  counter, // this is the same {counter: counter} ECMA6
  //multip,
  todos
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = (number) => store.dispatch(inc(number))
window.dec = (number) => store.dispatch(dec(number))

window.add = (taskText) => store.dispatch(add(taskText))
window.del = (index) => store.dispatch(del(index))

window.multi = (number) => store.dispatch(multi(number))
window.divi = (number) => store.dispatch(divi(number))

store.dispatch(add('Task1'))
store.dispatch(add('Task1'))
