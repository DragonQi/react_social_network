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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: 100 /*state.usersPage.totalUsersCount*/, //принудительное ограничение, в связи с тем что пользователей больше 10 тыс
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        followApply: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollowApply: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingCreator(isFetching))
        }
    }
};*/
//оставил как пример, ниже сокращение для удобства

export default connect (mapStateToProps, {
    setCurrentPage, getUsersThunk,
    followThunk, unfollowThunk})(UsersContainer);