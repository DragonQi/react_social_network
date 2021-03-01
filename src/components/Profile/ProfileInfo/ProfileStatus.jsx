import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        })//setState асинхронен
        //this.forceUpdate(); позже почитать
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })//setState асинхронен
        //this.forceUpdate(); позже почитать
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </>
        )
    }
};

export default ProfileStatus;