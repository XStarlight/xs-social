import React from "react";
import styles from './FormsControl.module.css'

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' +  (hasError ? styles.error : null)}>
        <Element {...input} {...props}/>
        {hasError && <span style={{color: 'yellow'}}>{meta.error}</span>}
    </div>
};