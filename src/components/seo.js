import * as React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from 'react-helmet';

export const Seo = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
    `);
    const meta = data?.site?.siteMetadata ?? {};
    const title = props.title  || meta.title;
    const description = props.description || meta.description;
    const image = new URL(props.image || meta.image);
    const url = new URL(props.path ||'/',meta.siteUrl);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {image && <meta name="image" content={image.href} />}

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image &&<meta property="og:image" content={image.href} />}
            <meta property="og:url" content={url.href} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={title} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image.href} />}
        </Helmet>
    );
}



