import Head from 'next/head'
import Layout from 'components/sec/layout'
import {getSortedPostsData} from "lib/posts";
import utilStyles from 'styles/utils.module.css'


export default function Home() {
    return (
        <Layout home>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
            </section>

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>

                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}