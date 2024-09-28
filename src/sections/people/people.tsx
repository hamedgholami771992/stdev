import CardC from "@/components/cards/cardC";
import React from "react";
import styles from './people.module.scss'
import { Images } from "@/images/index";
import Carousel from "@/components/carousel/carousel";

const People: React.FC = () => {
    return (
        <section className={styles.people}>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h4>What People Say</h4>
                    <p>
                        Quisque fermentum porta tincidunt.
                        Interdum semper. Pellentesque facilisis augue mollis suscipit.
                    </p>
                </div>
                <div className={styles.carouselSpot}>
                    <Carousel
                        currentIndex={0}
                        data={[
                            {
                                desc: "We test and compare the best project management software for collaborating with a team, hitting deadlines.",
                                profession: "Freelance Designer",
                                name: "Mila McSabbu",
                                img: Images.Lady2
                            },
                            {
                                desc: "Project management skimping on core features. It's strong at enabling with collaboration on visual materials.",
                                profession: "UI/UX Designer",
                                name: "Robert Fox",
                                img: Images.Man3
                            },
                            {
                                desc: "Project to be a team's best option for project management, but when all the stars align, it's a powerful tool.",
                                profession: "Web Developer",
                                name: "Jenny Wilson",
                                img: Images.Man4
                            },
                            {
                                desc: "We test and compare the best project management software for collaborating with a team, hitting deadlines.",
                                profession: "Freelance Designer",
                                name: "Mila McSabbu",
                                img: Images.Lady2
                            }
                        ]}
                        itemsCount={3}
                        

                    />
                </div>
            </div>
        </section>
    )
}


export default People




