import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={{alignItems: 'center'}}>
        <img src={preloader} alt='loading...'/>
    </div>
};

export default Preloader;