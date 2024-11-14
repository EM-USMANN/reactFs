import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <header>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container">
                        <Link to={"/"} className="navbar-brand" >Brand</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link " aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"about"} className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to={"products/bat"} className="dropdown-item" >Bats</Link></li>
                                        <li><Link to={"products/football"} className="dropdown-item" >Football</Link></li>
                                        <li><Link to={"products/badmintion"} className="dropdown-item" >Badmintion</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to={"contact"} className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className="d-flex" role="search">

                                <button className="btn btn-outline-light" type="submit">login</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar