import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import classNames from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
    
    return (
    <>
    <section id="hero">
        <div className={classNames("container", styles.container_center, styles.text_custom)}>
        <div className={classNames("divider",styles.divider)}></div>
            <div className="container my-5 pt-3">
                <div className="row">
                    <div className="col-lg-6">
                    <img className="w-100 mt-4 pt-5" src="/static/picture_1.png" />
                    </div>
                    <div className="col-lg-6">
                    <div className="p-5 mt-4">
                        <h1 className="display-4">PETERFENCE</h1>
                        <p className="lead">Coming from a farming background, we have been manufacturing and supplying the highest
                                    quality wooden fencing not just for the agricultural and rural communities but also for the
                                    modern gardener intending to secure property boundaries in style and with ease.</p>
                        <a href="/about" className="btn btn-outline-light">About us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 pb-5">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="p-5 mt-4">
                        <h1 className="display-4">ACACIA FENCE</h1>
                        <p className="lead" style={{textAlign: 'right'}}> Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for
                                    creating outdoor green spaces, decking, gardening and much more.<br/>
                                    The lifespan of acacia is minimum 30 years when in contact with the ground.<br/></p>
                        <a href="/shop" className="btn btn-outline-light float-end">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <img className="w-100 pt-5 mt-4" src="/static/photo_2.png" />
                    </div>
                    
                </div>
            </div>
            <div className={classNames("divider",styles.divider)}></div>
        </div>
    </section>
    <section id="cards" className="mt-5 pt-5">
        <div className={classNames("container", styles.container_center)}>
            <h1 className={classNames("text-center mb-5 pb-5",styles.text_custom)}>OUR PRODUCTS</h1>
            <div className={classNames("divider",styles.divider)}></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pt-4 pb-5 mb-5 mt-4">
                <div className="col">
                    <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/5.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Acacia Fence 1</h5>
                        <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="text-center">
                        <a href="/shop" className="btn btn-outline-dark text-center">Get Inquiry</a>
                        </div>
                        
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/3.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Acacia Fence 2</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="text-center">
                        <a href="/shop" className="btn btn-outline-dark text-center">Get Inquiry</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 1 mins ago</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/7.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Acacia Fence 3</h5>
                        <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="text-center">
                        <a href="/shop" className="btn btn-outline-dark text-center">Get Inquiry</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 7 mins ago</small>
                    </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                        <a href="/shop" className="btn btn-lg btn-outline-light text-center mb-5">See more products</a>
                        </div>
            <div className={classNames("divider",styles.divider)}></div>
        </div>
    </section>
    </>
    );
};

export default Home;
