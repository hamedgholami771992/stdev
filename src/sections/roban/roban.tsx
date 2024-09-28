import styles from './roban.module.scss'
import { Images } from '@/images/index'
import Image from 'node_modules/next/image'

const Roban: React.FC = () => {
    return (
        <div className={styles.roban}>
            <div className={styles.container}>

                <div className={styles.brandBox}>
                    <Image className={styles.brand} src={Images.TextEmpower} width={171} alt="" />
                </div>
                <div className={styles.brandBox}>
                    <Image className={styles.brand} src={Images.TextTechnet} width={171} alt="" />
                </div>
                <div className={styles.brandBox}>
                    <Image className={styles.brand} src={Images.TextThirdVision} width={171} alt="" />
                </div>
                <div className={styles.brandBox}>
                    <Image className={styles.brand} src={Images.TextZeneties} width={171} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Roban