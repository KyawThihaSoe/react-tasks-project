import React,{Fragment, useRef} from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = (props) =>{
    const enterList = useRef();
    const FormChangeHandler = (event) =>{
        event.preventDefault();
        props.onHide();
        const enterInputList = enterList.current.value;
        if(enterInputList.trim().length === 0){
            return;
        }
        props.onAddTasks(enterInputList);
        enterList.current.value = "";
    };
    return(
        <Fragment>
            <form onSubmit={FormChangeHandler}>
                <div className={styles.form__container}>
                    <div className={styles.form__data}>
                        <h1>Creat a list</h1>
                        <input ref={enterList} id="creatList" type="text" placeholder="Go studying"/>
                        <div>
                            <Button type="submit" >OK</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
};
export default Form;