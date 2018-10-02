import {
    CREATE_POST,
    REMOVE_POST,
    LOAD_ALL_POSTS,
    EDIT_POST, VOTE_POST
} from "../actions/post";

export const posts = (state ={}, action) => {
    const { post, posts, id, voteScore } = action;
    switch(action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: state.posts.concat(post)
            };
        case LOAD_ALL_POSTS:
            return {
                ...state,
                posts
            };
        case VOTE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                if(post.id === id) {
                    return {
                        ...post,
                        voteScore: voteScore
                    }
                }
                return post
            })};
        default:
            return {
                state
            }
    }
}