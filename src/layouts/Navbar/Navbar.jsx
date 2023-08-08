import React from 'react';
import { useStyles } from './styles';
import { NavLink } from 'react-router-dom';
import noonLogo from "../../assets/images/noon-logo.png"

const Navbar = () => {
    const classes = useStyles();

    return (
        <nav className={classes.navbar}>
            <div className={classes.logo} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={noonLogo} style={{ maxWidth: '5rem' }}></img>
                <div className={classes.logo}>Supply Chain Application</div>
            </div>
            <ul className={classes.navItems}>
                <li className={classes.navItem}>
                    <NavLink to="/">Driver</NavLink>
                </li>
                <li className={classes.navItem}>
                    <NavLink to="/darkstore">Darkstore</NavLink>
                </li>
                <li className={classes.navItem}>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
