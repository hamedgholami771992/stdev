import React from 'react'
import styles from './footer.module.scss'
import { Images } from '@/images'
import Image from 'next/image'


const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandCol}>
                    <div className={styles.brandLogoRow}>
                        <Image src={Images.Icon} alt='' width={40} height={40} />
                        <span>Crito</span>
                    </div>
                    <div className={styles.brandDesc}>
                        Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.
                    </div>
                    <div className={styles.brandPhone}>
                        <Image src={Images.Phone} alt='' width={24} height={24} />
                        <span>(888) 1234-5678</span>
                    </div>
                    <div className={styles.brandEmail}>
                        <Image src={Images.Email} alt='' width={24} height={24} />
                        <span>info@example.com</span>
                    </div>
                    <div className={styles.brandBtns}>
                        <div className={styles.btnSpot}>
                            <div className={styles.btn}>
                                <Image className={styles.btnImg} src={Images.GooglePlay} fill={true} alt='' />
                            </div>
                        </div>
                        <div className={styles.btnSpot}>
                            <div className={styles.btn}>
                                <Image className={styles.btnImg} src={Images.AppStore} fill={true} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={styles.usefulColumn}>
                    <li className={styles.head}>Useful Links</li>
                    <li className={styles.item}>Features</li>
                    <li className={styles.item}>About</li>
                    <li className={styles.item}>Service</li>
                    <li className={styles.item}>Team</li>
                </ul>
                <ul className={styles.helpCol}>
                    <li className={styles.head}>Help & Support</li>
                    <li className={styles.item}>FAQ</li>
                    <li className={styles.item}>Blog</li>
                    <li className={styles.item}>Contact Us</li>
                    <li className={styles.item}>Support</li>
                </ul>
                <ul className={styles.resourcesCol}>
                    <li className={styles.head}>Resources</li>
                    <li className={styles.item}>Guides and resources</li>
                    <li className={styles.item}>Team</li>
                    <li className={styles.item}>Tools</li>
                    <li className={styles.item}>Support</li>
                </ul>
                <div className={styles.rightsReserved}>
                    <div className={styles.rightsText}>© 2024 Crito. All Right Reserved</div>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <Image className={styles.socialImg} src={Images.Instagram} fill={true} alt='' />
                        </div>
                        <div className={styles.social}>
                            <Image className={styles.socialImg} src={Images.Twitter} fill={true} alt='' />
                        </div>
                        <div className={styles.social}>
                            <Image className={styles.socialImg} src={Images.LinkedIn} fill={true} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
