import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import StatusWithHooks from "./StatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img
                src="https://pix10.agoda.net/hotelImages/7243073/-1/2c23bff22987ee68884d4f4996df672a.png?s=1024x768"
                alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            ava + description
            <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
};

export default ProfileInfo;