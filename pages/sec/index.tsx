import Head from 'next/head'
import Layout from 'components/AuthLayout'
import {getSortedPostsData} from "lib/posts";
import utilStyles from 'styles/utils.module.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AuthNavMenu from 'components/AuthNavMenu';
import WarningHeader from 'components/WarningHeader';
import CardPortfolio from 'components/CardPortfolio';

export default function Home() {
    return (
        <>
            <Layout>
                <AuthNavMenu />
                
                <WarningHeader />

                <CardPortfolio />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}
