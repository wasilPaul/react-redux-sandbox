
const SET_USERS_LIST = 'randomUser/SET_USERS_LIST'
const START_LOADING = 'randomUser/START_LOADING'
const STOP_LOADING = 'randomUser/STOP_LOADING'

const setUsersList = (usersList) => ({
  type: SET_USERS_LIST,
  usersList
})

const startLoading = () => ({ type: START_LOADING })
const stopLoading = () => ({ type: STOP_LOADING })

export const fetchUsers = () => (dispatch, getState) => {
  dispatch(startLoading())
  fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      dispatch(setUsersList(data.results))
      dispatch(stopLoading())
    })
}

const initaialState = {
  isDataLoading: false,
  usersList: []
}

export default (state = initaialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList
      }
    case START_LOADING:
      return {
        ...state,
        isDataLoading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        isDataLoading: false
      }
    default:
      return state
  }
}