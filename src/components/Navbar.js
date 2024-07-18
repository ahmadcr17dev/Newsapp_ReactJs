import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Styledlogo className="navbar-brand" src={props.logo} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Styledpagename className="nav-link active" href="#">Home</Styledpagename>
                            </li>
                            <li className="nav-item">
                                <Styledpagename className="nav-link" href="#">News</Styledpagename>
                            </li>
                            <li className="nav-item">
                                <Styledpagename className="nav-link" href="#">Sports</Styledpagename>
                            </li>
                            <li className="nav-item">
                                <Styledpagename className="nav-link" href="#">Travel</Styledpagename>
                            </li>
                            <li className="nav-item">
                                <Styledpagename className="nav-link" href="#">About</Styledpagename>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger fw-semibold" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

const Styledlogo = styled.img`
    width: 150px;
    height: 100px;
`;
const Styledpagename = styled.a`
    font-family: "poppins", sans-serif;
    font-weight: normal;
    &:hover {
        text-decoration: underline;
        color: red;
        transition: 0.5s;
    }
    &.active {
        color: red !important;
        text-decoration: none;
        font-weight: 510;
    }
`;

export default Navbar;