
export const issues = () => ({
    type: 'ISSUES_LIST'
})

export const issuesCreate = (payload) => ({
    type: 'CREATE_ISSUE',
    payload: payload
})

export const issuesEdit = (payload) => ({
    type: 'EDIT_ISSUE',
    payload: payload
})