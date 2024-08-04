import React from "react";
import styles from "../components/Button.module.css";
const Button = ({ele})=>{
    return (
        <div>
            <button className={styles.btn} id={ele}>{ele}</button>
        </div>
    )
}
export default Button;