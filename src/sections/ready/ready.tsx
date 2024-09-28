import styles from './ready.module.scss'
import React, { CSSProperties } from 'react'
import FormControl from '@/components/formControl/formControl'


const Ready = () => {
    return (
        <section className={styles.ready}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h3>
                        Ready To Use Our App With No Hidden Malware
                    </h3>
                    <p>
                        Etiam euismod volutpat lacus fringilla henr.
                        Mauris lobortis purus velit quis.
                        Nunc mollis venenatis metus nec aliquet.
                    </p>
                </div>
                <div className={styles.inputBox}>
                    <FormControl
                        btnText='Try Free'
                        inputType='email'
                        placeHolder='Enter your email address'
                    />
                </div>
                <div className={styles.signIn}>
                    <div className={styles.text}>
                        Already a member?
                        <span>Sign In</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Ready