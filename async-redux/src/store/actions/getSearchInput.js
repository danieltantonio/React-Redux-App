export const GET_SEARCH = 'GET_SEARCH';

export const getSearch = search => {
    return {
        type: GET_SEARCH,
        payload: search
    }
}