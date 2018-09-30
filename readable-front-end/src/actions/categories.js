import * as ReadableAPI from '../utils/ReadabelAPI'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const GET_CATEGORY = 'GET_CATEGORY'

export const loadCategories = (categories) => ({
    type: LOAD_CATEGORIES,
    categories
})

export const loadCategoriesAPI = () => dispatch => (
    ReadableAPI
        .getCategories()
        .then(categories => dispatch(loadCategories(categories)))
)