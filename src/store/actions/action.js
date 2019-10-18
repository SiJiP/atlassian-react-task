// export const simpleAction = () => dispatch => {
//     dispatch({
//      type: 'GET_ISSUES_LIST',
//      payload: []
//     })
//    }
export const issues = () => ({
    type: 'ISSUES_LIST'
})

export const issuesCreate = (payload) => ({
    type: 'CERATE_ISSUE',
    payload: payload
})

export const issuesEdit = (payload) => ({
    type: 'EDIT_ISSUE',
    payload: payload
})