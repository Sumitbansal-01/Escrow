import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Escrow Account</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Create Contract</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Escrow</a>
                        </li>
                        <li>
                            <a className="nav-link active" href="#">Wallet</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
