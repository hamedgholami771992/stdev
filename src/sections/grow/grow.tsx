import styles from './grow.module.scss'
import { Images } from '@/images/index'
import React from 'react'
import CardB from '@/components/cards/cardB'


const Grow: React.FC = () => {
    return (
        <section className={styles.grow}>
            <div className={styles.container}>
                <div className={styles.textBoxA}>
                    <h2>
                        How To Grow Your Business
                    </h2>
                    <p>
                        Class aptent taciti sociosqu ad litora torquen conubia nostramase
                        inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
                    </p>
                </div>
                <div className={styles.cardsRow}>
                    <div className={styles.cardSpot}>
                        <CardB
                            kind='A'
                            img={Images.MiniDevA}
                            header='Active User Analytics'
                            body='Class aptent taciti sociosqu litora torquen conubia nostram.'
                        />
                    </div>
                    <div className={styles.cardSpot}>
                        <CardB
                            kind='B'
                            img={Images.MiniDevB}
                            header='Smart Coding Development'
                            body='Morbi eget aliquet finibus, best condimentum aliquet quam.'
                        />
                    </div>
                    <div className={styles.cardSpot}>
                        <CardB
                            kind='C'
                            img={Images.MiniDevC}
                            header='User Friendly Interface'
                            body='Quisque magna, sollicitudin vitae, lobortis feugiat arcu.'
                        />
                    </div>
                </div>
                <div className={styles.textBoxB}>
                    Approx <span>875+</span> team members ready to online support for you
                </div>
            </div>
        </section>
    )
}


export default Grow