import {
    LOAD_CATEGORIES
} from '../actions/categories'

export const categories = (state = {}, action) => {
    const { categories } = action
    switch(action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                categories
            }
        default:
            return state;
    }
}

