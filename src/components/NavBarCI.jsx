import React from 'react'
import BootstrapLogo from '../img/c2i logo.png'

export const NavBarCI = () => {
    return (
        <React.Fragment>
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand mb-0 h1">
                        <img src={BootstrapLogo} alt="BootstrapLogo" width="30" height="30" className="d-inline-block align-top mx-2" />Create&Inspire
                    </a>
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="navbar-toggler" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="/" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Features
                            </a>
                            <ul className="dropdown-menu" aria-labelledby='navbarDropdown' style={{ margin: 0 }}>
                            <li>
                                <a href="/" className="dropdown-item">Live Projects</a>
                            </li>
                            <li>
                                <a href="/" className="dropdown-item">Learning Objectives</a>
                            </li>
                            <li>
                                <a href="/" className="dropdown-item">End Goal</a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item active">
                            <a href="/" className="nav-link">Contact</a>
                        </li>
                        </ul>
                    </div>
                    <form action="" className="d-flex">
                        <input type="text" className="form-control me-2" />
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </nav>
        </React.Fragment>
    )
}