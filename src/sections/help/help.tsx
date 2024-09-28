import styles from './help.module.scss'
import React from 'react'
import Image from 'node_modules/next/image'
import { Images } from '@/images/index'


const Help:React.FC = () => {
    return (
        <div className={styles.help}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h4>We Help To GrowYour Business</h4>
                    <p>
                    Quisque fermentum porta tincidunt. Interdum semper. 
                    Pellentesque facilisis augue dolor mollis suscipit erat libero fermentum.
                    </p>
                </div>
                <div className={styles.row2}>
                    <div className={styles.itemSpot}>
                        <div className={styles.item}>
                            <div className={styles.itemN}>142</div>
                            <div className={styles.itemT}>New Features</div>
                        </div>
                    </div>
                    <div className={styles.itemSpot}>
                        <div className={styles.item}>
                            <div className={styles.itemN}>28k</div>
                            <div className={styles.itemT}>APP Download</div>
                        </div>
                    </div>
                    <div className={styles.itemSpot}>
                        <div className={styles.item}>
                            <div className={styles.itemN}>53M</div>
                            <div className={styles.itemT}>Active Users</div>
                        </div>
                    </div>
                    <div className={styles.itemSpot}>
                        <div className={styles.item}>
                            <div className={styles.itemN}>90%</div>
                            <div className={styles.itemT}>Positive Rate</div>
                        </div>
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <div className={styles.imgSpot}>
                        <Image className={styles.img} src={Images.Dashboard} alt="" fill={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Help