const initialState = {
    users: []
  }

  const usersReducer =  (state = initialState, action) => {
    switch (action.type) {
     case 'USERS_LIST':
      return {
        ...state,
        users: [...action.payload]
      }
     default:
      return state
    }
   }

export default usersReducer;