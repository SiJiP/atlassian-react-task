const initialState = {
  issues: []
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
     case 'ISSUES_LIST':
      return {
        ...state,
        issues: [...action.payload]
      }
      case 'CREATE_ISSUE':
        return {
          ...state,
          issues: [...state.issues, action.payload]
        }
      case 'EDIT_ISSUE':
        return {
          ...state,
          issues: [...state.issues, action.payload]
        }
     default:
      return state
    }
   }

export default reducer;