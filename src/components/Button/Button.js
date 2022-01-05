import React,{Fragment} from "react";
import styles from "./Button.module.css";

const Button =(props)=> {
    return (
        <Fragment>
            <section className={styles.button__container}>
                <button onClick={props.onClick} type={props.type || "button"}>
                    {props.children}
                </button>
            </section>
        </Fragment>
    )
};
export default Button; 