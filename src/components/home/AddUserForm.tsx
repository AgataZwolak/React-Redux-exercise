import React, { useEffect } from 'react'
import useInput from '../../customhook/useInput'
import { addUser } from '../../actions/users.actions';
import { State } from '../../store/state.model';
import { useSelector } from 'react-redux';

const AddUserForm = (): JSX.Element => {
    const {value: name, bind: bindName, reset: resetName} = useInput("");
    const {value: username, bind: bindUsername, reset: resetUsername} = useInput("");
    const {value: email, bind: bindEmail, reset: resetEmail} = useInput("");

    const users = useSelector((state: State) => state.users.users);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = users[users.length - 1]?.id + 1;
        const lat = Math.round((Math.random() * 361 -180) *1e4)/1e4;
        const lng = Math.round((Math.random() * 181  -90)*1e4)/1e4;
        addUser({ id, name, username, email, address: { geo: {lat, lng} }});
        resetEmail();
        resetName();
        resetUsername();
    }

    useEffect(() => {
        resetEmail();
        resetName();
        resetUsername();
    },[])

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New User</h5>
                <div className="input-field ">
                    <input id="new_name" type="text" className="validate" {...bindName} />
                    <label htmlFor="new_name">Name</label>
                </div>
                <div className="input-field ">
                    <input id="new_username" type="text" className="validate" {...bindUsername} />
                    <label htmlFor="new_username">Username</label>
                </div>
                <div className="input-field">
                    <input id="new_email" type="text" className="validate" {...bindEmail} />
                    <label htmlFor="new_email">Email</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default AddUserForm