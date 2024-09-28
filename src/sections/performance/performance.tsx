'use client'

import styles from './performance.module.scss'
import React, { useState } from 'react'
import Accardion from '@/components/texts/accardion'
import Image from 'node_modules/next/image'
import { Images } from '@/images/index'

const Performance: React.FC = () => {
    const [visibleID, setVisibleID] = useState<string|undefined>(undefined)
    const visibleIdChanger = (id: string, state: boolean) => {
        if(state){
            setVisibleID(id)
        }
        else {
            setVisibleID(undefined)
        }
    }
    return (
        <section className={styles.performance}>
            <div className={styles.container}>
                <div className={styles.textBoxA}>
                    <h2>
                        Performance Is The Key To Most People Achieving A Better Future
                    </h2>
                    <p>
                        Etiam euismod odio euismod lacus fringilla hendrer.
                    </p>
                </div>
                <div className={styles.textList}>
                    <div className={styles.textItem}>
                        <Accardion 
                            head='Custom Edit Tool Application'
                            body='Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.'
                            id='A'
                            visibleID={visibleID}
                            setVisibleID={visibleIdChanger}
                        />
                    </div>
                    <div className={styles.textItem}>
                        <Accardion 
                            head='Built In Safty Chat Mode Enabled'
                            body='Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.'
                            id='B'
                            visibleID={visibleID}
                            setVisibleID={visibleIdChanger}
                        />
                    </div>
                    <div className={styles.textItem}>
                        <Accardion 
                            head='Foster Trust Builds System Always Open'
                            body='Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.'
                            id='C'
                            visibleID={visibleID}
                            setVisibleID={visibleIdChanger}
                        />
                    </div>
                    <div className={styles.textItem}>
                        <Accardion 
                            head='Create Auto Layouts In App Interface'
                            body='Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.'
                            id='D'
                            visibleID={visibleID}
                            setVisibleID={visibleIdChanger}
                        />
                    </div>
                </div>
                <div className={styles.imgCol}>
                    <div className={styles.imgBox}>
                        <Image className={styles.img} src={Images.Class} fill={true} alt=""/>
                    </div>
                    <div className={styles.tooltip}>
                        <div className={styles.percent}>27%</div>
                        <p className={styles.body}>Productivity increase on average</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Performance