import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import classNames from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';

const Shop: NextPage = () => {
    
    return (
    <>
    <section id="hero">
        <div className={classNames("container", styles.container_center)}>
            <h1 className={classNames("text-center m-5 p-5", styles.text_custom)}>Our Products</h1>
            <div className={classNames("divider",styles.divider)}></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pt-4 pb-5 mb-5 mt-4">
                <div className="col">
                    <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/2.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
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
                    <img src="/static/3.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
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
                    <img src="/static/4.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
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
                <div className="col">
                    <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/5.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
                    <div className="card-body">
                        <h5 className="card-title">Acacia Fence 4</h5>
                        <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="text-center">
                        <a href="/shop" className="btn btn-outline-dark text-center">Get Inquiry</a>
                        </div>
                        
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 2 mins ago</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/6.jpg" className={classNames("card-img-top", styles.card_img_top)} />
                    <div className="card-body">
                        <h5 className="card-title">Acacia Fence 5</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="text-center">
                        <a href="/shop" className="btn btn-outline-dark text-center">Get Inquiry</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 8 mins ago</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/7.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
                    <div className="card-body">
                        <h5 className="card-title">Acacia Fence 6</h5>
                        <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="text-center">
                        <a href="/shop" className="btn btn-outline-dark text-center">Get Inquiry</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 5 mins ago</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className={classNames("card h-100",styles.card)}>
                    <img src="/static/8.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
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
                    <img src="/static/9.jpg" className={classNames("card-img-top", styles.card_img_top)} />
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
                    <img src="/static/10.jpg" className={classNames("card-img-top", styles.card_img_top)}/>
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
            <div className={classNames("divider",styles.divider)}></div>
        </div>
    </section>
    </>
    );
};

export default Shop;