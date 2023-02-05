import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import classNames from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import ContactUsModal from '../components/ContactUsModal';

const About: NextPage = () => {
    
    return (
    <>
    <section id="hero">
        <div className={classNames("container", styles.container_center)}>
            <h1 className={classNames("text-center m-5 p-5", styles.text_custom)}>About Us</h1>
            <div className={classNames("divider",styles.divider)}></div>
        <p className={classNames("mt-5 pt-5 m-5", styles.text_custom_1)}>
                                    Coming from a farming background, we have been manufacturing and supplying the highest
                                    quality wooden fencing not just for the agricultural and rural communities but also for the
                                    modern gardener intending to secure property boundaries in style and with ease.
                                    <br/>
                                    <br/>
                                    As a sustainable supplier, we pride ourselves on processing and cultivating only the fast-
                                    growing Acacia trees, which are ideal for all exterior projects due to their natural high
                                    density and resilience to adverse weather conditions. Sourced from European forests, acacia
                                    is an ecological hardwood which stands out for its low environmental impact (its low carbon
                                    footprint) compared to its exotic competitors which are becoming more expensive due to
                                    rising shipping costs.
                                    <br/>
                                    <br/>
                                    <br/>
                                    According to both the British Standards Institution (BSI) and the Commonwealth Standards
                                    Network (CSN), Acacia is the only European timber species that falls under Use Class 4 and is
                                    accordingly suitable for outdoor use in contact with soil and fresh water since it exhibits
                                    good elasticity in terms of stiffness, flexural strength and environmental impact resistance,
                                    as per European Standard BS EN 335-2013. Please note, Use Class 3 woods such as chestnut,
                                    oak and teak can also be used outdoors but they are not to come in contact with soil.
                                    <br/>
                                    <br/>
                                    The natural durability of Acacia’s heartwood against wood-destroying agents such as wood
                                    decay fungi, insects, marine borers and bacteria has been tested and assessed (considered
                                    in  BS EN 350). In fact, it is the chemical substances found in Acacia trees – polyphenols
                                    (more specifically, flavonoids) and radical scavengers that give the wood its natural
                                    durability and make it resistant to biological degradation.
                                    <br/>
                                    <br/>
                                    <br/>
                                    Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for
                                    creating outdoor green spaces, decking, gardening, horticulture, viticulture, arboriculture,
                                    agriculture, equestrian fencing, horseback riding, hunting and other outdoor sports facilities,
                                    interior carpentry, flooring, wall panels and coverings, cladding.
                                    <br/>
                                    <br/>
                                    The use of acacia wood ensures the maximum service life of your product.
                                    <br/>
                                    The lifespan of acacia is minimum 30 years when in contact with the ground.
                                    <br/>
                                    <br/>
                                    <b>PETERFENCE</b> provides you with peace of mind through robust quality assurance processes,
                                    control plans, Production Part Approval Process (PPAP) documentation and quality certified
                                    manufacturing. Our reputation rests on the quality of the service we offer, so we
                                    consistently deliver thorough support with tact and confidence.
                                    <br/>
                                    <br/>
                                    If have decided to collaborate with us, please contact us for more information. Thank you.
                                </p>
                                <div className={classNames("divider",styles.divider)}></div>
                                <br/>
                                <div className="text-center">
                                    <ContactUsModal></ContactUsModal>
                        {/* <a href="#" className="btn btn-lg btn-outline-light text-center">Contact Us</a> */}
                        </div>
        </div>
    </section>
    </>
    );
};

export default About;