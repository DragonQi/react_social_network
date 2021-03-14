import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);//useState состоит из массива двух значений, непосредственно значения и второе, способа изменения этого значения
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <>
                {!editMode &&
                <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "-------"/* временное решение, чтобы не терять статус */}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange}
                               onBlur={deactivateEditMode}
                               value={status}/>
                    </div>
                }
            </>
        )
};

export default ProfileStatusWithHooks;
