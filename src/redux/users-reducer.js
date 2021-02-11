const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitriy', status: 'status here id1', location: {city: 'Minsk', country:'Belarus'}},
        {id: 2, followed: false, fullName: 'Sergey', status: 'status here id2', location: {city: 'Minsk', country:'Belarus'}},
        {id: 3, followed: true, fullName: 'Alexander', status: 'status here id3', location: {city: 'Minsk', country:'Belarus'}},
        {id: 4, followed: true, fullName: 'Alina', status: 'status here id4', location: {city: 'Minsk', country:'Belarus'}}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersCreator = (users) => ({type: SET_USERS, users})