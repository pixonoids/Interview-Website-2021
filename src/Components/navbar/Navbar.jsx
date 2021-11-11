import React from 'react'
import classes from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes["Freshlook-navbar"]}>
        <ul className={classes["Navbar-content"]}>
            <li className={classes["List-items"]}><div className={classes.pixo}></div></li>
            <li className={classes["pixo_name"]}>PIXONOIDS</li>
            <li className={classes["List-items"]}><a href="#">About</a></li>

            <li className={classes["List-items"]}><a href="#">Contact Us</a></li>
        </ul>
    </div>
    )
}

export default Navbar