import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    config.autoAddCss = false;
    return (
        <ThemeProvider>
            {(router.pathname === '/' || router.pathname === '/shop' || router.pathname === '/about') ?
            <Layout className="bg-primary w-100 overflow-hidden">
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </Layout>
        :
        <Component {...pageProps} />
        }
            
        </ThemeProvider>        
    );
}

export default MyApp;
