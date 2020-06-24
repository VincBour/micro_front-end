import * as React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './style';
import { AppBar, Toolbar, IconButton } from '@talentsoft/design-system';


const AppHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <AppBar position="sticky" color='transparent'>
                <Toolbar >
                    <h1>New Front Office</h1>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <NavLink to='/'>Offers TS</NavLink>
                    </IconButton>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <NavLink to='/about'>About</NavLink>
                    </IconButton>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <NavLink to='/signIn'>Sign In</NavLink>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppHeader;