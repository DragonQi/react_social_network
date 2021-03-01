import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getUserStatusThunk, setUserProfile, updateUserStatusThunk} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; //вытаскиваем параметр id из url, если его нет, юзаем профиль по умолчанию
        if (!userId) {
            userId = '15131';
        }
        this.props.getProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatusThunk}/>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileThunk, getUserStatusThunk, updateUserStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);