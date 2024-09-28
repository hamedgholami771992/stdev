import React from 'react'
import styles from './choose.module.scss'
import Image from 'node_modules/next/image'
import { Images } from '@/images/index'
import CardB from '@/components/cards/cardB'

const Choose: React.FC = () => {
    return (
        <section className={styles.choose}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h3>
                        Why Will You Choose Our Application

                    </h3>
                    <p>
                        Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo.
                        Phasellus metus nisl euismod eget lorem.
                    </p>
                </div>
                <div className={styles.members}>
                    <div className={styles.images}>
                        <div className={styles.imgSpot}>
                            <Image className={styles.imgd} src={Images.Man1} fill={true} alt="" />
                        </div>
                        <div className={styles.imgSpot}>
                            <Image className={styles.imgd} src={Images.Man2} fill={true} alt="" />
                        </div>
                        <div className={styles.imgSpot}>
                            <Image className={styles.imgd} src={Images.Lady1} fill={true} alt="" />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.bold}>5M+</div>
                        <div className={styles.normal}>Active Members</div>
                    </div>



                </div>
                {/* <div className={styles.cards}> */}
                <div className={`${styles.cardSpot} ${styles.cardSpotA}`}>
                    <CardB
                        body='Class aptent taciti sociq u litora torquen conub.'
                        header='Creative Ideas'
                        img={Images.Light}
                        kind="D"
                    />
                </div>
                <div className={`${styles.cardSpot} ${styles.cardSpotB}`}>
                    <CardB
                        body='Integer a elit pellentesqu e semper sem ultricies'
                        header='Awesome Design'
                        img={Images.Pen}
                        kind="B"
                    />
                </div>
                <div className={`${styles.cardSpot} ${styles.cardSpotC}`}>
                    <CardB
                        body='Fusce risus lorem pulvin ar eu posuere vitae.'
                        header='Best Features'
                        img={Images.Checks}
                        kind="A"
                    />
                </div>
                <div className={`${styles.cardSpot} ${styles.cardSpotD}`}>
                    <CardB
                        body='Aenean eget nulla eu dui malesuad convallis vel.'
                        header='Easy Solutions'
                        img={Images.Weird}
                        kind="B"
                    />
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}


export default Choose