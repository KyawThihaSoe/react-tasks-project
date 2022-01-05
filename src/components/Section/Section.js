import React,{Fragment} from "react";
import Button from "../Button/Button";
import styles from "./Section.module.css";

const Section = (props) => {
    return (
        <Fragment>
            <section>
                {props.users.map((user)=>(
                    <div className={styles.box__container}  key={user.id}>
                        <h3>{user.tasks}</h3>
                    </div>
                ))}
            </section>  
            <section className={styles.button__section}>
                <Button onClick={props.onShow}>Add</Button>
            </section>
        </Fragment>
    )
};
export default Section;