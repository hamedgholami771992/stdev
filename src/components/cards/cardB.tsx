import styles from './cardB.module.scss'
import React from 'react'
import { StaticImport } from 'node_modules/next/dist/shared/lib/get-img-props'
import Image from 'node_modules/next/image';

type CardBProps = {
    img: string | StaticImport
    header: string
    body: string
    kind: "A" | "B" | "C" | "D" | 
          "1" | "2" | "3" | "4"
}

const CardB: React.FC<CardBProps> = (props) => {
    return (
        <div className={styles.cardB}>
            <div className={`${styles.imgBox} ${styles[props.kind]}`}>
                <Image className={styles.img} src={props.img} height={51} alt=""/>
            </div>
            <h4>
                {props.header}
            </h4>
            <p>
                {props.body}
            </p>
        </div>
    )
}


export default CardB