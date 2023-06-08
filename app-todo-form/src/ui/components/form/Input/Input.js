import React from "react";
import cx from "classnames";
import useStyles from "./useStyles";


export default function Input(props) {
    console.log(props);

    const {type, name, customClass, isChecked, changeCheckbox, text, placeholder, meta} = props;
    console.log('meta: ', meta)
    const classes = useStyles(props);
    const className = cx(`${classes['form__input']}`, {[customClass]: customClass});
    // const error = meta.error && meta.touched;
    return (
        <>
            <input defaultValue={text}
                   type={type}
                   name={name}
                   className={className}
                   checked={isChecked}
                   onChange={changeCheckbox}
                   placeholder={placeholder}
                // error={meta.error && meta.touched}
            />
            {/*{*/}
            {/*    meta.error && meta.touched ?*/}
            {/*        undefined :*/}
            {/*        <span style={{color: 'red', fontWeight: 700}}>{meta.error}</span>*/}
            {/*}*/}
            {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
        </>


    )
}