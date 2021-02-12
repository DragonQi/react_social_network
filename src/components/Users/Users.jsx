import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false,
                    fullName: 'Dmitriy',
                    status: 'status here id1',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false,
                    fullName: 'Sergey',
                    status: 'status here id2',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: true,
                    fullName: 'Alexander',
                    status: 'status here id3',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: true,
                    fullName: 'Alina',
                    status: 'status here id4',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;