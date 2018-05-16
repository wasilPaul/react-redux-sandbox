
const SET_USERS_LIST = 'randomUser/SET_USERS_LIST'

export const setUsersList = (usersList) => ({
  type: SET_USERS_LIST,
  usersList
})

const initaialState = {
  usersList: []
}


export default (state = initaialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST:
    return {
        ...state,
        usersList: action.usersList
      }
      default:
      return state

  }

}