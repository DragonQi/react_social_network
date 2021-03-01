import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; //вытаскиваем параметр id из url, если его нет, юзаем профиль по умолчанию
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileThunk(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);