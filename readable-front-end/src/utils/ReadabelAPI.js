const api = "http://localhost:3001";

let token = localStorage.token;
if(!token) {
    token = localStorage.token = Math.random().toString(46).substr(-8)
}

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': token,
    'Access-Control-Allow-Origin': 'http://localhost:3001',
};

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);

export const getPostsCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);

export const createPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
      .then(data => data);

export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    });

/*
* Option is a String that can be 'upVote' or 'downVote'
* */
export const votePost = (id, option) => {
    const post = {id: id, option: option};
    return fetch(`${api}/posts/${id}`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers
    }).then(res => res.json())
      .then(data => data);
}

// export const votePost = (id, option) => {
//     const post = { id: id, option: option};
//     return  fetch(`${url}/posts/${id}`, {
//         method: "POST",
//         body: JSON.stringify(post),
//         headers
//     }).then(res => res.json())
//         .then(data => data)
// }


