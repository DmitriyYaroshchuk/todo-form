import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import useStyles from "../TodoForm/useStyles";
import {Field} from "react-final-form";

const Login = (props) => {
    const {handleSubmit, values, pristine, submitting} = props;
    console.log(props)
    const classes = useStyles(props);
    // const error = meta.error && meta.touched;
    // console.log(error)
    const required = value => (value ? undefined : 'Required field')
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                label="todoInput"
                name="todoInput"
                type="text"
                component={Input}
                placeholder="Введите текст"
                validate={required}
            />
            {/*{*/}
            {/*    meta.error && meta.touched ?*/}
            {/*        undefined :*/}
            {/*        <span style={{color: 'red', fontWeight: 700}}>{meta.error}</span>*/}
            {/*}*/}
            <Button text="Добавить" disabled={pristine}/>
        </form>
    )
}
export default Login;

