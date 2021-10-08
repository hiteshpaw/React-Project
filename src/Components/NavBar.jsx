import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header: {
        background: 'black'
    },
    tabs: {
        color: 'white',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    },

})
const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink to="./" className={classes.tabs} exact>Phone Book</NavLink>
                <NavLink to="all" className={classes.tabs}>All Contacts</NavLink>
                <NavLink to="add" className={classes.tabs}>Add Contact</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;