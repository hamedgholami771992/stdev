'use client'
import styles from './accardion.module.scss'
import React, { useState } from 'react'

type AccardionPropsT = {
    head: string,
    body: string,
    visibleID: string | undefined,
    id: string,
    setVisibleID: (id: string, state: boolean) => void
}

const Accardion: React.FC<AccardionPropsT> = (props) => {


    return (
        <article className={styles.accardion}
            onClick={() => {
                if (props.visibleID === props.id) {
                    return props.setVisibleID(props.id, false)
                }
                props.setVisibleID(props.id, true)
            }}>
            <h6
                className={styles.head}>
                {props.head}
                <span >
                    {props.visibleID === props.id ? '-' : '+'}
                </span>
            </h6>
            {
                props.visibleID === props.id &&
                <div className={styles.desc}>
                    {props.body}
                </div>

            }
        </article>
    )
}



export default Accardion