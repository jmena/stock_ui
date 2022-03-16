import Head from 'next/head'
import styles from 'components/layout.module.css'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'

const name = 'Acero'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>

                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
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