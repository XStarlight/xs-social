import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import StatusWithHooks from "./StatusWithHook";
import userPhoto from "../../../assets/images/user.png";
import redBanner from '../../../assets/images/redBanner.jpg'
import {Field, reduxForm} from "redux-form";

const ProfileInfo = ({profile, saveAvatar, isOwner, status, updateStatus, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false)
    };

    return <div className={classes.info}>
        <div>
            <img className={classes.banner}
                 src={redBanner}
                 alt="The awesome red banner!"/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt="Fun Face" className={classes.avatar}/>
            <div>{isOwner && <input type={'file'} onChange={onAvatarSelected}/>}</div>
            <StatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                {!editMode && isOwner ? <button onClick={() => setEditMode(true)}>Edit Profile</button> : null}
            </div>
            {editMode ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                <ProfileData profile={profile}/>}

        </div>
    </div>
};

const ProfileData = ({profile}) => {
    return <div style={{display: 'inlineBlock', padding: '1rem', marginTop: '1rem', border: '1px red solid'}}>
        <div>Full Name: {profile.fullName}</div>
        <div>
            <div>About me: {profile.aboutMe}</div>
            <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob &&
            <div>
                My professional skills: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    </div>
};
const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div style={{display: 'inlineBlock', padding: '1rem', marginTop: '1rem', border: '1px red solid'}}>
            <div>
                <button>Save</button>
            </div>
            <div>Full Name: <Field name='FullName' component={'input'}/></div>
            <div>
                <div>About me: <Field name='AboutMe' component={'input'}/></div>
                <div>Looking for a job: <Field name='LookingForAJob' component={'input'} type={'checkbox'}/></div>
                <div>
                    My professional skills: <Field name='lookingForAJobDescription' component={'input'}/>
                </div>
                <div>
                    Contacts: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                </div>

            </div>
        </div>
    </form>
};

const ProfileDataFormRedux = reduxForm({
    form: 'profile'
})(ProfileDataForm);

const Contact = ({contactTitle, contactValue}) => {
    return <div style={{paddingLeft: '1rem'}}>{contactTitle}: {contactValue}</div>
};


export default ProfileInfo;