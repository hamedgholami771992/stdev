import styles from './security.module.scss'
import React from 'react'
import Image from 'node_modules/next/image'
import { Images } from '@/images/index'

const Security: React.FC = () => {
    return (
        <section className={styles.security}>
            <div className={styles.container}>
                <div className={styles.textBoxA}>
                    <h3>
                        Better Security To Better Protection An Experience Of Strength.
                    </h3>
                    <p>
                        Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos.
                        Donec tristique nibh ipsum dignissim.
                    </p>
                </div>
                <div className={styles.textBoxB}>
                    <div className={`${styles.textBItem} ${styles.textBItem1}`}>
                        <h4>
                            Well Organised User Interface
                        </h4>
                        <p>
                            Etiam id euismod odio. Ut euismod sem a lacus fringilla.
                        </p>
                    </div>
                    <div className={`${styles.textBItem} ${styles.textBItem2}`}>
                        <h4>
                            Completely Bug Free
                        </h4>
                        <p>
                            Cras eleifend leo ac varius tristique suspendisse.
                        </p>
                    </div>
                </div>
                <div className={styles.cards}>

                    <div className={styles.circle}>
                        <Image className={styles.cardA} src={Images.MasterCardTop} width={345} alt=""/>
                        <Image className={styles.cardB} src={Images.MasterCardTop} width={345} alt=""/>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Security