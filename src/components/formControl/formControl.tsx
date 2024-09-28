'use client'
import React, { ChangeEvent, useState } from "react";
import styles from './formControl.module.scss'
import ButtonA from "../buttons/buttonA";

type FormContrlPropsT = {
    inputType: "email" | "text",
    placeHolder: string,
    btnText: string
}


const FormControl: React.FC<FormContrlPropsT> = (props) => {
    const [hasValue, setHasValue] = useState(false)

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.trim().length === 0){
            setHasValue(false)
        }
        else {
            setHasValue(true)
        }
    }
    return (
        <div className={styles.formControl}>
            <input type={props.inputType} className={styles.input} onChange={inputChangeHandler}/>
            {
                !hasValue &&
                <p className={styles.placeHolder}>
                {props.placeHolder} 
                </p>

            }
            <div className={styles.btnSpot}>
                <ButtonA 
                    children={props.btnText}
                />
            </div>
      
        </div>
    )
}



export default FormControl


