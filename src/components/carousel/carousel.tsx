'use client';

import React, { useState } from 'react';
import styles from './carousel.module.scss';
import CardC from '../cards/cardC';
import { StaticImport } from 'node_modules/next/dist/shared/lib/get-img-props';

type CarouselPropsT = {
    data: {
        desc: string;
        profession: string;
        name: string;
        img: StaticImport | string;
    }[];
    currentIndex: number;
    itemsCount: number;

};

const Carousel: React.FC<CarouselPropsT> = (props) => {
    const [startIndex, setStartIndex] = useState<number>(props.currentIndex);

    const selectedIndices = [startIndex]
    let selectedItems = []
    for (let i = startIndex + 1; i < props.itemsCount + startIndex; i++) {
        if (i <= props.data.length - 1) {
            selectedIndices.push(i)
        }
        else {
            selectedIndices.push(i - props.data.length)
        }
    }
    selectedItems = selectedIndices.map((ind) => {
        return (
            <div className={styles.cardSpot} key={`i-${ind}`}>
                <CardC
                    desc={props.data[ind].desc}
                    profession={props.data[ind].profession}
                    name={props.data[ind].name}
                    img={props.data[ind].img}
                />
            </div>
        )
    })

    console.log(selectedIndices)

    const leftArrowHandler = () => {
        if (startIndex - 1 < 0) {
            setStartIndex(props.data.length - 1);
        } else {
            setStartIndex(startIndex - 1);
        }
    };

    const rightArrowHandler = () => {
        if (startIndex + 1 === props.data.length) {
            setStartIndex(0); // Loop back to the first item
        } else {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.btnRow}>
                <div className={styles.btnSpot}>
                    <div className={`${styles.btn} ${styles.btnLeft}`} onClick={leftArrowHandler}>
                    
                    </div>
                </div>
                <div className={styles.btnSpot}>
                    <div className={`${styles.btn} ${styles.btnRight}`} onClick={rightArrowHandler}>
                        
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                {selectedItems}
            </div>
        </div>
    );
};

export default Carousel;
