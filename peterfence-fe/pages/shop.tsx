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
        <div className={classNames("main",styles.main)}>
            <h1 className={classNames("text-center mb-5",styles.text_custom)}>Our Products</h1>
            <div className={classNames("divider",styles.divider)}></div>
            <ul className={classNames("cards",styles.cards)}>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="https://picsum.photos/500/300/?image=10"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Card Grid Layout</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={classNames("btn card_btn",styles.btn, styles.card_btn)}>Read More</button>
                    </div>
                </div>
                </li>
            </ul>
            <div className="text-center">
                <a href="/shop" className="btn btn-lg btn-outline-light text-center mt-5 mb-5">See more products</a>
            </div>
            <div className={classNames("divider",styles.divider)}></div>
        </div>
    </div>
    </section>
    </>
    );
};

export default Shop;