export const issues = (payload) => ({
    type: 'ISSUES_LIST',
    payload: payload
})

export const issuesCreate = (payload) => ({
    type: 'CREATE_ISSUE',
    payload: payload
})

export const issuesEdit = (payload) => ({
    type: 'EDIT_ISSUE',
    payload: payload
})