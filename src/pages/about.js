import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export const query = graphql`
    query CocktailQuery {
    file(name: { eq: "cocktail" }) {
        childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
    }
    }
`;



const About = ({data}) => {
    return (
        <Layout title="About this site" description="more information about this site" >
            <h1>About Page</h1>
            <GatsbyImage
                image={getImage(data.file)}
                alt="cocktail"
            />
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};
export default About;