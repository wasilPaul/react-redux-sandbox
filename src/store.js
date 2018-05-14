import { createStore, combineReducers } from 'redux'
import counterReducer, { inc, dec } from './state/counter'


const reducer = combineReducers({
  counter: counterReducer
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())