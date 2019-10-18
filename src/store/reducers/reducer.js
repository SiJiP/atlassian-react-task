import * as actionType from '../actions/action'

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
     case actionType.issues:
      return {
        ...state
      }
      case actionType.issuesCreate:
        return {
          ...state,
          issues: {}
        }
     default:
      return state
    }
   }

export default reducer;