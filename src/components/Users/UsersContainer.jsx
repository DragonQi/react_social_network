import React from 'react';
import {connect} from 'react-redux';
import {
    followThunk,
    unfollowThunk,
    getUsersThunk,
    setCurrentPage,
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.followThunk}
                unfollow={this.props.unfollowThunk}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: 100 /*getTotalUsersCount(state)*/, //принудительное ограничение, в связи с тем что пользователей больше 10 тыс
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect (mapStateToProps, {setCurrentPage, getUsersThunk, followThunk, unfollowThunk}),
    withAuthRedirect
)(UsersContainer)