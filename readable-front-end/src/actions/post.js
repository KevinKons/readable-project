import * as ReadableAPI from '../utils/ReadabelAPI'

export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';


export const loadAllPosts = (posts) => ({
    type: LOAD_ALL_POSTS,
    posts
});

export const loadAllPostsAPI = () => dispatch => (
    ReadableAPI
        .getAllPosts()
        .then(posts => dispatch(loadAllPosts(posts)))
);

export const addPost = (post) => {
    return {
        type: CREATE_POST,
        post
    }
};

export const addPostAPI = (post, voteScore) => dispatch => (
    ReadableAPI
        .createPost(post)
        .then(dispatch(addPost(post, voteScore)))
);

export const votePost = (id, voteScore) => {
    return {
        type: VOTE_POST,
        id,
        voteScore
    }
};

export const votePostAPI = (id, option) => dispatch => (
    ReadableAPI
        .votePost(id, option)
        .then(data => dispatch(votePost(id, data.voteScore)))
);

