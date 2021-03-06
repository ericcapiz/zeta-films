import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Zeta Films</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Saved Movies</Link>
                        </li>
                        <li>
                            <Link to="/watched">Movies Watched</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn">Find Movies</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
