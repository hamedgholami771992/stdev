import styles from './header.module.scss'
import React from 'react'
import { Images } from '@/images/index'
import Image from 'node_modules/next/image'
import ButtonA from '@/components/buttons/buttonA'
import CardA from '@/components/cards/cardA'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>

            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h1>
                        Smart-Thinking & Innovative Solution.
                    </h1>
                    <p>
                        Class aptent taciti sociosqu ad litora torquent conubia nostrama
                        inceptos himenaeos. Donec tristique nibh ipsum dignissim.
                    </p>
                </div>
                <div className={styles.btnRow}>
                    <div className={styles.btnSpot}>
                        <ButtonA children="Discover More" />
                    </div>
                    <div className={styles.btnSpot}>
                        <ButtonA children="Explore Service" kind='B' />
                    </div>
                </div>
                <div className={styles.legends}>
                    <div className={styles.legendItem}>
                        <Image className={styles.img} src={Images.Tick} width={20} height={20} alt="" />
                        <div className={styles.text}>
                            Get 15 days free trial
                        </div>
                    </div>
                    <div className={styles.legendItem}>
                        <Image className={styles.img} src={Images.Tick} width={20} height={20} alt="" />
                        <div className={styles.text}>
                            No credit card is required
                        </div>
                    </div>
                    <div className={styles.legendItem}>
                        <Image className={styles.img} src={Images.Tick} width={20} height={20} alt="" />
                        <div className={styles.text}>
                            Cancel anytime
                        </div>
                    </div>
                </div>
                <div className={styles.cardsRow}>
                    <div className={styles.cardSpot} key="card-1">
                        <CardA img={Images.Meeting} text={'Greatest Digital Conference-2023'} />
                    </div>
                    <div className={styles.cardSpot} key="card-2">
                        <CardA img={Images.ShortiMan} text={'June 15-30, New York-USA'} />
                    </div>
                    <div className={styles.cardSpot} key="card-3">
                        <CardA img={Images.Meeting} text={'Lead Speaker Amenia Fwalt'} />
                    </div>
                </div>
                
            </div>
        </header>
    )

}

export default Header