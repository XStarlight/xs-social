import React from "react";
import classes from './NavbarFriends.css'

const NavbarFriend = (props) => {
    return <div className={classes.sp}>
        {props.friend}
    </div>
}
export default NavbarFriend;