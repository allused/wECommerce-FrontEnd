import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {mMenus} from './../menuJson/menuItems';

function Header() {

    const[menus, setMenus] = useState([]);
    const classes = useStyles();

    return (
        <nav className={classes.nav}>
            <div className={classes.imgContainer}>
                <img></img>
            </div>
            <div className={classes.menuContainer}>
                <ul className={classes.ul}>
                    {
                        mMenus.map(menu => 
                            <li className={classes.li}>{menu.title}</li>
                        )
                    }
                    
                </ul>
            </div>
        </nav>
    )
}

export default Header

const useStyles = makeStyles({
    nav: {
        top: 0,
        background: '#e1e1e1',
        position: 'sticky',
        height: '13vh'
        
    },

    li: {
        listStyle: 'none',
        marginRight: '20px'
    },

    ul: {
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
        
    },

    menuContainer: {
        width: '70%',
        boxSizing: 'border-box',
        float: 'left',
        height: '100%',
        paddingRight: '40px'
    },

    imgContainer: {
        width: '30%',
        height: '100%',
        float: 'left'
    }
})
