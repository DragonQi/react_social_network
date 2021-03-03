import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        })//setState асинхронен
    }//this.forceUpdate(); позже почитать

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"/* временное решение, чтобы не терять статус */}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;