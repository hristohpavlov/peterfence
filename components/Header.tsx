import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from '../styles/Header.module.scss';
interface HeaderProps {
    scrollPos?: number;
}
const Header = (props: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const [scrolling,useScrolling] = useState(false);
    useEffect(() => {
        if(props.scrollPos && props.scrollPos > 50){
            useScrolling(true);
        }else{
            useScrolling(false);
        }
    },[props.scrollPos])
    useEffect(() => {
        if(theme === 'dark'){
            localStorage.setItem("theme", "dark")
        }else if(theme === 'light'){
            localStorage.setItem("theme", "light")
        }
    },[theme])
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" className={classNames(scrolling ? "active" : "transparent")}>
                <Container style={{maxWidth: "unset"}}>
                    <Navbar.Brand href="/">Peterfence</Navbar.Brand>
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