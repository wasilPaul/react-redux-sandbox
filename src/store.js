import { createStore, combineReducers } from 'redux'
import counter, { inc, dec } from './state/counter'


const reducer = combineReducers({
  counter // this is the same {counter: counter} ECMA6
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = (number) => store.dispatch(inc(number))
window.dec = (number) => store.dispatch(dec(number))