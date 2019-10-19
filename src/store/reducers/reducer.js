const initialState = {
  users: [],
  issues: [{
    summary: "initialIssue",
    priority: 'medium',
    assigneeId: 1,
    labelIds: [1, 2, 3]
  },
  {
    summary: "Some Issue",
    priority: 'low',
    assigneeId: 2,
    labelIds: [5, 1, 3]
  }]
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
     case 'ISSUES_LIST':
      return {
        ...state
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