import React, { useEffect, useState } from 'react'
import AddUserForm from './AddUserForm'
import UsersList from '../users/UsersList'
import { getUsers } from '../../actions/users.actions'
import SearchBar  from './SearchBar'

const Home = ():JSX.Element => {

    useEffect(() => {
        getUsers();
    },[])

    const [isVisible, setVisible] = useState(true);

    const toggleForm = () => {
        setVisible(isVisible => !isVisible);
    }

    return (
        <div className="container ">
            <div className="row center-align">
            <div className="toolbar">
                <button className="btn green" onClick={toggleForm}>Toggle Add</button>
                <SearchBar/>
            </div>
                {isVisible && <AddUserForm />}
                <UsersList/> 
            </div>
        </div>
    )
}

export default Home

