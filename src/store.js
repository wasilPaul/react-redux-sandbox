import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter, { inc, dec, multi, divi } from './state/counter'
import todos, { add, del } from './state/todos'
import newTaskText from './state/text'
import randomUsers, { setUsersList, fetchUsers } from './state/randomUsers'
import asyncReduxCounter, { initCounterSync } from './state/asyncReduxCounter'
import auth, { initAuthUserSync } from './state/auth';
//import multip, {multi, divi} from './state/multip'

const reducer = combineReducers({
  auth,
  counter, // this is the same {counter: counter} ECMA6
  todos,
  newTaskText,
  randomUsers,
  asyncReduxCounter,
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
store.dispatch(initCounterSync())
store.dispatch(initAuthUserSync())


