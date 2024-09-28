import styles from './cardA.module.scss'
import React from 'react'
import Image from 'node_modules/next/image'
import { StaticImport } from 'node_modules/next/dist/shared/lib/get-img-props'
import { Images } from '@/images/index'

type CardAProps = {
    img: string | StaticImport
    text: string
}

const CardA: React.FC<CardAProps> = (props) => {
    return (
        <div className={styles.cardA}>
            <div className={styles.imgBox}>
                <Image src={props.img} fill={true} alt=""/>
            </div>
            <div className={styles.textRow}>
                <span className={styles.text}>
                    {props.text}
                </span>
                <Image className={styles.icon} src={Images.ArrowRight} width={24} height={24} alt=""></Image>
            </div>
        </div>
    )
}



export default CardA