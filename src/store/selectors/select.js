import { createSelector } from 'reselect'

export const getIssues = state => state.issues.issues

export const getSortOption = state => state.issues.sorting;

export const getOption = createSelector(
    [getSortOption],
    (option) => option
)

export const getSortingIssues = createSelector(
    getIssues,
    getOption,
    (issues, sortOption) => {
        switch(sortOption){
            case 'summary':
                return [...issues].sort((a, b) => {
                    return a.summary.toLowerCase() > b.summary.toLowerCase() ? 1: -1;
                });
            case 'priority':
                return [...issues].sort((a, b) => {
                    return a.priority.value < b.priority.value ? 1 : -1;
                });
            case 'assignee':
                    return [...issues].sort((a, b) => {
                        return a.assigneeId > b.assigneeId ? 1: -1;
                    });
            default:
                return issues
        }
    }
)



