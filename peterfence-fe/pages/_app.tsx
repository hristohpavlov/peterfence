import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';



function MyApp({ Component, pageProps }: AppProps) {
    config.autoAddCss = false;
    return (
        <ThemeProvider>
            <Layout className="bg-primary w-100 overflow-hidden">
                <ParallaxProvider>
                    <Component {...pageProps} />
                </ParallaxProvider>
            </Layout>
        </ThemeProvider>        
    );
}

export default MyApp;
