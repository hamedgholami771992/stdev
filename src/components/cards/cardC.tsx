import React from 'react'
import styles from './cardC.module.scss'
import Image from 'node_modules/next/image'
import { StaticImport } from 'node_modules/next/dist/shared/lib/get-img-props'


type CardCPropsT = {
    img: StaticImport | string,
    name: string
    profession: string
    desc: string
}

const CardC: React.FC<CardCPropsT> = (props) => {
    return (
        <div className={styles.cardC}>
            <div className={styles.row1}>
                <div className={styles.imgBox}>
                    <Image src={props.img} alt="" fill={true}/>
                </div>
                <div className={styles.personal}>
                    <h6 className={styles.name}>{props.name}</h6>
                    <div className={styles.career}>{props.profession}</div>
                </div>
            </div>
            <p className={styles.desc}>
                {props.desc}
            </p>
        </div>
    )
}


export default CardC
