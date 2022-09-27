import React, { useEffect } from 'react'
import useInput from '../../customhook/useInput'
import { updateUser } from '../../actions/users.actions'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { State } from '../../store/state.model';

const EditForm = (): JSX.Element => {
    let history = useHistory();
    const user = useSelector((state: State) => state.users.selectedUser);

    const {value: username, bind: bindUsername, reset: resetUsername} = useInput("");
    const {value: email, bind: bindEmail, reset: resetEmail} = useInput("");

    useEffect(() => {
        if (!user) return;
        resetUsername(user.username);
        resetEmail(user.email);
    },[user])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!user) return;
        e.preventDefault()
        await updateUser(user.id, { id: user.id, username, email })
        resetUsername()
        resetEmail()
        history.push('/')
    }

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3 ">Edit User </h5>
                <div className="input-field ">
                    <input id="first_name" type="text" className="validate" {...bindUsername} />
                    <label htmlFor="note_title" className="active">Username </label>
                </div>
                <div className="input-field">
                    <textarea id="textarea1" className="materialize-textarea" {...bindEmail} >  </textarea>
                    <label htmlFor="textarea1 " className="active">User e-mail</label>
                </div>
                <button className="btn green">Update </button>
            </form>
        </div>
    )
}

export default EditForm
