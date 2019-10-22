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
        console.log(sortOption)
        if(sortOption === 'default'){
        return issues
        }else{
            return issues.sort((a, b) => {
                return a[sortOption] > b[sortOption] ? 1: -1
            })
        }
    }
)



