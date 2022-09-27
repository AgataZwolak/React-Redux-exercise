import React from 'react'
import { deleteUser } from '../../actions/users.actions'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { User } from '../../models/user.model';
import { reduxSelectUser } from '../../store/usersReducer/action.creator';

type Props = {
    user: User;
}

const UserItem = ( { user } : Props): JSX.Element => {

    const dispatch = useDispatch();

    const classes = 'note ';

    const setColor = (classes: string) => {
        const lat = user.address.geo.lat;
        const lng = user.address.geo.lng;
        if( lat >= 0 &&  lng >= 0) return  classes += 'red';
        else if(lat >= 0 && lng < 0) return  classes += 'green';
        else if(lat < 0 && lng >= 0) return  classes += 'yellow';
        else return classes += 'blue';
    };

    return (
        <div className={setColor(classes)}>
            <div className="right-align">
                <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => deleteUser(user.id)}>delete</i>

            </div>
                <h5 className="black-text"> {user.name}</h5>
            <p className="truncate">{user.username}</p>
            <p className="grey-text">{user.email}</p>
            <p className="grey-text">{user.address.geo.lat + ' | ' + user.address.geo.lng}</p>
            <div className="right-align">
                <Link to={`/editform/${user.id}`} >
                    <i onClick={() => dispatch(reduxSelectUser(user))} className="material-icons black-text" style={{ cursor: 'pointer' }} >
                        edit
                    </i>
                </Link>
            </div>
        </div>
    )
};

export default UserItem;
