import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from '../styles/Header.module.scss';
import {Helmet} from 'react-helmet';

interface HeaderProps {
    scrollPos?: number;
}
const Header = (props: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const [scrolling, useScrolling] = useState(false);
    const [currTheme, setCurrTheme] = useState<String | undefined>('');
    const [date, setDate] = useState(0);
    useEffect(() => {
        setCurrTheme(theme);
    },[theme])
    useEffect(() => {
        if (props.scrollPos && props.scrollPos > 50) {
            useScrolling(true);
        } else {
            useScrolling(false);
        }
    }, [props.scrollPos])
    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem("theme", "dark")
        } else if (theme === 'light') {
            localStorage.setItem("theme", "light")
        }
    }, [theme])
    useEffect(() => {
        var today = new Date(),
            time = today.getHours();
        setDate(time);
        if(localStorage.getItem('theme') === null){
        if (time > 6 && time < 18) {
            setTheme("light");
        } else if (date < 18 || date > 6) {
            setTheme("dark");
        }
    }
    }, [])
    console.log(date)
    console.log("default theme", theme)
    return (
        <>
            <Helmet>
                <title>Peterfence</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/static/logo-pf-final.png" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            </Helmet>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" className={classNames(scrolling ? "active" : "transparent")}>
                <Container style={{ maxWidth: "unset" }}>
                    {currTheme === 'dark' && <Navbar.Brand href="/"><img src="/static/peterfence-only-logo-dark.png" style={{maxHeight: '50px', minWidth: '60px', marginTop: '-10px', marginBottom: '-10px'}}/></Navbar.Brand>}
                    {currTheme === 'light' && <Navbar.Brand href="/"><img src="/static/logo-pf-final.png"  style={{maxHeight: '77px', minWidth: '90px', marginTop: '-20px', marginBottom: '-20px', marginLeft: '-25px'}}/></Navbar.Brand>}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-flex d-lg-none flex-column justify-content-around">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <label className={classNames(styles.switch)}>
                                <input type="checkbox" checked={theme === 'dark' ? true : false} onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}></input>
                                <span className={classNames(styles.slider)}></span>
                            </label>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="/shop">Shop</Nav.Link>
                            <Nav.Link eventKey={3} href="/about">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header