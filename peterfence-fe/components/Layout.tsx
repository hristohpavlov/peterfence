import classNames from "classnames";
import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/Home.module.scss';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }: any) => {
    const [navbar, setNavbar] = useState(0);
    const [currTheme, setCurrTheme] = useState<String | undefined>('');
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setCurrTheme(theme);
    },[theme])
    return (
        <>
            <ToastContainer className={classNames("toast_position",styles.toast_position)}/>
            <Header scrollPos={navbar} />
            <main>
                <div className={classNames("container", styles.container_center)}>
                    {currTheme === 'dark' && <div className={classNames("moon", styles.moon)}></div>}
                    {currTheme === 'light' && <div className={classNames("sun", styles.sun)}></div>}
                </div>
                <div className={classNames("container", styles.container_text)}>
                    {navbar < 80 && <h2 className={classNames("title", styles.title_text)}>
                        <span className={classNames("title_word title_word_1", styles.title_word, styles.title_word_1)}>Peter</span>
                        <span className={classNames("title_word title_word_2", styles.title_word, styles.title_word_2)}>fence</span>
                    </h2>
                    }
                </div>
                <div className={classNames("container", styles.container_center)}>
                {navbar < 50 && <div className={classNames("scroll_down", styles.scroll_down)}></div>}
                </div>
                <div onScroll={(e) => { const element = e.target as HTMLInputElement; setNavbar(element.scrollTop) }} className={classNames("parallax", styles.parallax)}>
                    <div className={classNames("parallax_layer parallax_layer_0", styles.parallax_layer, styles.parallax_layer_0)}>
                        {/* {theme === 'dark' ? <img src="/static/1_moon.png" /> : <img src="/static/1_sun.png" />} */}
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_1", styles.parallax_layer, styles.parallax_layer_1)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_2", styles.parallax_layer, styles.parallax_layer_2)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_3", styles.parallax_layer, styles.parallax_layer_3)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_4", styles.parallax_layer, styles.parallax_layer_4)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_5", styles.parallax_layer, styles.parallax_layer_5)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_6", styles.parallax_layer, styles.parallax_layer_6)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_7", styles.parallax_layer, styles.parallax_layer_7)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_8", styles.parallax_layer, styles.parallax_layer_8)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_layer parallax_layer_9", styles.parallax_layer, styles.parallax_layer_9)}>
                        <img src="" />
                    </div>
                    <div className={classNames("parallax_cover", styles.parallax_cover)}>
                        {children}
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    );
}
export default Layout