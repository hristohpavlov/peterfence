import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import classNames from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import EmailModal from '../components/EmailModal';

const Shop: NextPage = () => {
    
    return (
    <>
    <section id="hero">
    <div className={classNames("container mt-5 mb-n5", styles.container_center)}>
        <div className={classNames("main",styles.main)}>
            <h1 className={classNames("text-center mb-5",styles.text_custom)}>Our Products</h1>
            <div className={classNames("divider",styles.divider)}></div>
            <ul className={classNames("cards",styles.cards)}>
            <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/1.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 1</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/2.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 2</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/3.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 3</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/4.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 4</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/5.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 5</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/6.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 6</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/1.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 1</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/2.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 2</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/3.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 3</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/4.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 4</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/5.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 5</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
                <li className={classNames("cards_item",styles.cards_item)}>
                <div className={classNames("card",styles.card)}>
                    <div className={classNames("card_image",styles.card_image)}><img className={classNames("img",styles.img)} src="/static/6.jpg"/></div>
                    <div className={classNames("card_content",styles.card_content)}>
                    <h2 className={classNames("card_title",styles.card_title)}>Fence 6</h2>
                    <p className={classNames("card_text",styles.card_text)}>Demo of product description</p>
                    <EmailModal/>
                    </div>
                </div>
                </li>
            </ul>
            <div className={classNames("divider",styles.divider)}></div>
        </div>
    </div>
    </section>
    </>
    );
};

export default Shop;