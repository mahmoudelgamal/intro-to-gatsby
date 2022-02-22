import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
const About = () => {
    return (
        <Layout title="About this site" description="more information about this site" >
            <h1>About Page</h1>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};
export default About;