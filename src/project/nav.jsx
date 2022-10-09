import { useState } from "react";
import React  from "react";
import logo from "../images/logo.png"
import { Link } from "react-scroll";
export default function Nav() {
    const [nav,setnav] = useState(false)
    const changBackground = () => {
        if (window.scrollY >= 50) {
            setnav = (true)
        } else {
            setnav = (false)
        }
    }
    window.addEventListener("scroll", changBackground)
    return(
        <nav className={nav ? "nav" :"nav active"}>
        <Link to ="main" className="logo" smooth={true} duration={2000}>
            <img src={logo} alt="" />
        </Link>
        <input className="menu-btn" id="menu-btn" type="checkbox" />
        <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>

        </label>
        <ul className="menu">
            <li><Link to="main" smooth={true} duration={1000} >Header</Link></li>
            <li><Link to="features" smooth={true} duration={1000}>Feature</Link></li>
            <li><Link to="offer" smooth={true} duration={1000}>Offer</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
        </ul>

        </nav>
    )
}