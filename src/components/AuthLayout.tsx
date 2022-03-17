import styles from 'components/layout.module.css'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import NavMenu from "./AuthNavMenu";
import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Container } from 'react-bootstrap';



export default function Layout({children}) {

    return (
        <Container>
            {children}
        </Container>
    )
}
