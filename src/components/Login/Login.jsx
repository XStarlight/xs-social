import React from "react";
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../common/validation/validation";
import {Element} from "../common/formsControl/FormsControl";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from '../common/formsControl/FormsControl.module.css'

const Input = Element('input');
const maxLength30 = MaxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field validate={[required, maxLength30]} name='email' placeholder={'Email'} component={Input}/></div>
        <div><Field validate={[required, maxLength30]} name='password' type={'password'} placeholder={'Password'}
                    component={Input}/></div>
        <div><Field name='rememberMe' type='checkbox' component='input'/>remember me</div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div style={{paddingLeft: '1rem'}}>
        <div>
            <h1 style={{color: 'cyan'}}>Login</h1>
        </div>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);