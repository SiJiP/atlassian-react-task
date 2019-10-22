const initialState = {
  issues: [],
  sorting: 'default'
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
          issues: state.issues.map(issue => {
            return (issue.id === action.payload.id) ? action.payload : issue
          })
        }
        case 'SORTING':
        return {
          ...state,
          sorting: action.payload
        }
     default:
      return state
    }
   }

export default reducer;