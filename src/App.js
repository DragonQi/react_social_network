import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {getAuthUserData} from "./redux/auth-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";


class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <HashRouter /*basename={process.env.PUBLIC_URL} HashRouter вместо BrowserRouter использован по причине более удобной настройки на gh-pages */>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar state={this.props.state}/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer store={this.props.store}/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginContainer store={this.props.store}/>}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default compose(
    withRouter,
    connect(null, {getAuthUserData} ))(App);
