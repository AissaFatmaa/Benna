import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbarr.css";
import { Dropdown, ButtonGroup, NavDropdown, Nav } from "react-bootstrap";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import { logout } from "../JS/clientSlice/clientSlice";

function Navbarr() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const client = useSelector((state) => state.client.client);

    return (
        <div>
            <div className="navv">
                {/*  Meta  */}
                <meta charSet="UTF-8" />
                <title>Smooth navigation</title>
                {/*  Styles  */}
                <link rel="stylesheet" href="styles/index.processed.css" />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <header className="main-header" >
                    <div className="nav-container">
                        <nav
                            className="navbar navbar-expand-lg main-nav px-0"
                            style={{
                                width: 1351,
                                height: 56,
                                backgroundColor: "rgb(235 222 240 / 42%)",
                            }}
                        >
                            {/* <a className="navbar-brand" href="/mojo">
                <img src="http://rajeshdas.com/assets/images/logo.svg" alt="rajeshdas.com" />
              </a> */}
                            <ul
                                className="navbar-nav ml-auto text-uppercase f1"
                                style={{ marginTop: -36, paddingLeft: 20 }}
                            >
                                <li className="name" styleName={{ color: "pink" }}>
                                    {" "}
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Benna_TV_logo_and_wordmark_%28H%29.svg/356px-Benna_TV_logo_and_wordmark_%28H%29.svg.png"
                                        style={{
                                            width: "100px",
                                            height: "64px",
                                            marginTop: "-34px",
                                        }}
                                    />
                                </li>
                                <li>
                                    {/* <svg style={{width:30,height:100,paddingTop:30}}data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg> */}
                                </li>
                            </ul>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#mainMenu"
                                aria-controls="mainMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar icon-bar-1" />
                                <span className="icon-bar icon-bar-2" />
                                <span className="icon-bar icon-bar-3" />
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="mainMenu"
                                style={{ paddingRight: 77 }}
                            >
                                <ul
                                    style={{ marginTop: -20 }}
                                    className="navbar-nav ml-auto text-uppercase f1"
                                >
                                    <li style={{ marginTop: 20 }}>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li style={{ marginTop: 20 }}>
                                        <a href="/about">About</a>
                                    </li>
                                    <li className="drop-hover-product" style={{ marginTop: 20 }}>
                                        <Link to="/services">Products</Link>
                                        <ul className="drop-product">
                                            <Link to="/sweet">
                                                {" "}
                                                <li>TRADITIONAL SWEET</li>
                                            </Link>
                                            <Link to="/tea">
                                                {" "}
                                                <li>SWEET OF TEA OR COFFEE</li>
                                            </Link>
                                            <Link to="/chocolate">
                                                {" "}
                                                <li>HOME CHOCOLATE FACTORY</li>
                                            </Link>
                                            <Link to="/salty">
                                                {" "}
                                                <li>SALTY BITES</li>
                                            </Link>
                                        </ul>
                                    </li>

                                    <li style={{ marginTop: 20 }}>
                                        <Link to="/contact">contact</Link>
                                    </li>
                                    {client ? null : (
                                        <li
                                            style={{ marginTop: 20, paddingLeft: 8, color: "teal" }}
                                        >
                                            {" "}
                                            <Link to="/login" style={{ color: "#000000c4" }}>
                                                Connexion
                                            </Link>
                                        </li>
                                    )}
                                    {client && client.name == "rahma" ? (
                                        <li style={{ marginTop: 20 }}>
                                            <Link to="/dashbord"> Dashboard</Link>
                                        </li>
                                    ) : null}

                                    {client ? (
                                        <li style={{ marginTop: 10 }}>
                                            <Link to="/pannier">
                                                {" "}
                                                <img style={{ marginTop: "10px" }}
                                                    src="https://cdn-icons-png.flaticon.com/512/118/118089.png"
                                                    width="30"
                                                    height="30"
                                                ></img>
                                            </Link>
                                        </li>
                                    ) : null}
                                    {client ? (
                                        <li style={{ marginTop: 20 }}>
                                            <Dropdown as={ButtonGroup} >
                                                <img
                                                    style={{
                                                        backgroundSize: "32px 32px",

                                                        borderRadius: "50%",
                                                        height: "32px",
                                                        width: "51px",
                                                    }}
                                                    src="data:image/png;base64,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"
                                                    alt=""
                                                    aria-hidden="true"
                                                    data-noaft=""
                                                />

                                                <Dropdown.Toggle
                                                    split
                                                    variant="light"
                                                    id="dropdown-split-basic"
                                                    style={{ marginTop: "8px", marginRight: " -42px", marginLeft: "56px", backgroundColor: "#af7ac5" }}
                                                />

                                                <Dropdown.Menu style={{ backgroundColor: "#f7f1f9" }}>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        <Link to="/profil" style={{ color: "black" }}>
                                                            {" "}
                                                            <svg
                                                                style={{ marginRight: 8 }}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                class="bi bi-gear-fill"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                            </svg>
                                                            Mon compte
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <button style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={() => { dispatch(logout()); navigate("/") }}>
                                                            {" "}
                                                            <svg
                                                                style={{ marginRight: 8 }}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                class="bi bi-box-arrow-left"

                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                                                                />
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                                                />
                                                            </svg>{" "}
                                                            Déconnexion
                                                        </button>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    ) : null}
                                </ul>
                            </div>

                        </nav>
                    </div>
                    {/* /.container */}
                </header>
                {/*
    Wow! What do you want to build?
    You have so many possibilities right now... Looking for something to kick off?
    How about a simple folio page to show off everything you're going to make!
   
  */}
                {/* Bootstrap core JavaScript
    ================================================== */}
                {/* Placed at the end of the document so the pages load faster */}
                {/* Scripts */}
            </div>
        </div>
    );
}

export default Navbarr;


