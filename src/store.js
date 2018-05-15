import { createStore, combineReducers } from 'redux'
import counter, { inc, dec, multi, divi } from './state/counter'
import todos, {add, del} from './state/todos'
import newTaskText from './state/text'
//import multip, {multi, divi} from './state/multip'

const reducer = combineReducers({
  counter, // this is the same {counter: counter} ECMA6
  //multip,
  todos,
  newTaskText
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

