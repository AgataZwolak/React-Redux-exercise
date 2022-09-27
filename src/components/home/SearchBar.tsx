import React from 'react'
import { useDispatch } from 'react-redux';
import useInput from '../../customhook/useInput'
import { reduxSetSearch } from '../../store/usersReducer/action.creator';


const SearchBar = (): JSX.Element => {

    const {value: search, bind: bindSearch, reset: resetSearch} = useInput("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(reduxSetSearch(search));
    }

    return (
            <div className="white searchbar">
            <div className="input-field ">
                <input id="search" type="text" className="validate" {...bindSearch}/>
                <label htmlFor="search">Search</label>
            </div>
            <button className="btn green" onClick={handleSubmit}>Search</button>
            </div>
    )
}

export default SearchBar
