import styles from 'components/layout.module.css'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import NavMenu from "./NavMenu";
import React from "react";

const name = 'Acero'

export default function Layout({children, home}) {

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    <NavMenu />
                </>

            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}