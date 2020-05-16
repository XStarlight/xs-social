// import React from "react";
// import {Field, reduxForm} from "redux-form";
//
// const ProfileDataForm = ({handleSubmit}) => {
//     return <form onSubmit={handleSubmit}>
//         <div style={{display: 'inlineBlock', padding: '1rem', marginTop: '1rem', border: '1px red solid'}}>
//             <div>
//                 <button>Save</button>
//             </div>
//             <div>Full Name: <Field name='FullName' component={'input'}/></div>
//             <div>
//                 <div>About me: <Field name='AboutMe' component={'input'}/></div>
//                 <div>Looking for a job: <Field name='LookingForAJob' component={'input'} type={'checkbox'}/></div>
//                 <div>
//                     My professional skills: <Field name='lookingForAJobDescription' component={'input'}/>
//                 </div>
//                 {/*<div>*/}
//                 {/*    Contacts: {Object.keys(profile.contacts).map(key => {*/}
//                 {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
//                 {/*})}*/}
//                 {/*</div>*/}
//             </div>
//         </div>
//     </form>
// };
//
// const ProfileDataFormRedux = reduxForm({
//     form: 'profile'
// })(ProfileDataForm);
//
// export default ProfileDataFormRedux