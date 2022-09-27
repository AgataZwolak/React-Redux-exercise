import React from 'react'
import UserItem from './UserItem'
import { useSelector } from 'react-redux';
import { State } from '../../store/state.model';

const UsersList = (): JSX.Element => {
    
    const users = useSelector((state: State) => state.users.visibleUsers);

    return (
        <div className="noteslist">
            {users.map(u => <UserItem key={u.id} user={u} />)}
        </div>
    )
}

export default UsersList
