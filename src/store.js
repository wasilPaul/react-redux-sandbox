import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter, { inc, dec, multi, divi } from './state/counter'
import todos, { add, del } from './state/todos'
import newTaskText from './state/text'
import randomUsers, { setUsersList, fetchUsers } from './state/randomUsers'
//import multip, {multi, divi} from './state/multip'

const reducer = combineReducers({
  counter, // this is the same {counter: counter} ECMA6
  todos,
  newTaskText,
  randomUsers,
  
  //multip,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



