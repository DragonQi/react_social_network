import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.totalUsersCount
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
};
export default connect (mapStateToProps, mapDispatchToProps)(Users);