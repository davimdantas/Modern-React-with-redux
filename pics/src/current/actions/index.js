import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import getUnique from '../../utils/getUnique'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const posts = getState().posts;

    const userIds = getUnique(posts, 'userId')

    userIds.forEach((id) => {
        dispatch(fetchUser(id))
    })
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};


// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const promise = await jsonPlaceHolder.get('/posts');

//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: promise
//         });
//     }
// };
