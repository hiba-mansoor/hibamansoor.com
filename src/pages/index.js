import React from 'react';
import {
    About,
    Banner,
    Contact,
    Contributions,
    Layout,
    Resume,
    SEO,
} from '../components';

const IndexPage = () => (
    <Layout>
        <SEO title="Software Engineer" />
        <Banner />
        <About />
        <Resume />
        <Contributions />
        <Contact />
    </Layout>
);

export default IndexPage;
