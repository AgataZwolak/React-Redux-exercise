import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="green">
            <div className="nav-wrapper">

                <Link to='/' className="brand-logo">HOME</Link>
            </div>
        </nav>
    )
}

export default Navbar
