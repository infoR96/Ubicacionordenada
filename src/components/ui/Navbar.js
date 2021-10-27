import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                { name }
            </span>

            <Link to='/ubicacion/'><button 
                className="btn btn-outline-primary"
                
            >
                <i className="fas fa-sign-out-alt"></i>
                <span>Map</span>
            </button>
            </Link>
            
            <button 
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
