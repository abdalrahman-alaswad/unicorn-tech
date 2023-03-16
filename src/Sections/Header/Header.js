import React from 'react'
import Logo from "../../assets/Images/Dealerz..png"
import "./Header.css"
import { BsTelephone, BsPerson } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineBell } from "react-icons/ai";


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  p-3 ">
                <div className="container-fluid">
                    <a className="navbar-brand" ><img src={Logo} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto  ">
                            <li className="nav-item">
                                <a className="nav-link " href='#' aria-current="page" ><span className='icon-container'><BsTelephone /></span>Call Center</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'> <span className='icon-container'><HiOutlineTruck /></span>Shipping & Returns</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export const MainHeader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-4 nav-main-container ">
                <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLeft" aria-controls="navbarLeft" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div style={{ width: "7%" }}></div>
                    <div className="collapse navbar-collapse" id="navbarLeft">
                        <ul className="navbar-nav   ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href='#'>Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'> Promo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'> Blog</a>
                            </li>
                        </ul>
                    </div>

                    <form className="d-flex form-container mx-auto" role="search">
                        <input className="form-control me-2" type="search" style={{ width: "75%" }} placeholder="Search What You Need " aria-label="Search" />
                    </form>

                    <div id="navbarRight">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href='#'><span className='icon-container'><AiOutlineHeart /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'> <span className='icon-container'><AiOutlineShoppingCart /><sup>5</sup></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' > <span className='icon-container'><BsPerson /></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' > <span className='icon-container'><AiOutlineBell /></span></a>
                            </li>
                        </ul>
                    </div>
                    <div style={{ width: "7%" }}></div>
                </div>
            </nav>

        </>
    )
}

export default Header