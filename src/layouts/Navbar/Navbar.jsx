import React from 'react';
import { useStyles } from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>Supply Chain Application</div>
            <ul className={classes.navItems}>
                <li className={classes.navItem}>Home</li>
                <li className={classes.navItem}>Orders</li>
                <li className={classes.navItem}>Settings</li>
            </ul>
        </nav>
    );
};

export default Navbar;
