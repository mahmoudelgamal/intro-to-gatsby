import React from 'react';
import  Layout  from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { imageWrapper } from '../styles/index.module.css';
import { StaticImage } from 'gatsby-plugin-image';

export default function Index()  {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx(filter: {}, sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                frontmatter {
                    title
                    description
                    date(fromNow: true)
                }
                id
                slug
                }
            }
            allSanityEpisode(
                sort: { fields: date, order: DESC }
                filter: { youtubeID: { ne: null } }
                limit: 20
            ) {
                nodes {
                    id
                    title
                    guest {
                        name
                    }
                    _rawSlug
                    gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
                }
            }
        }
    `);
    const posts = data.allMdx.nodes;
    const episodes = data.allSanityEpisode.nodes;

    return (
        <>
            <Layout>
                <div className={imageWrapper}>
                    <StaticImage
                        src='../images/ivana-la-61jg6zviI7I-unsplash.jpg'
                        alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
                        placeholder="dominantColor"
                        width={300}
                        height={300}
                    />
                </div>                    
                <h1>Hello world!!</h1>
                <Link to="/about">Go to About</Link>
                <h1>Check all my posts here</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link to={post.slug}>{post.frontmatter.title}</Link> {' '}
                            <small>posted {post.frontmatter.date}</small>
                        </li>
                    ))}
                </ul>
                
                <h2>
                    Latest episodes of <em>Learn With Jason</em>
                </h2>
                <ul>
                    {episodes.map((episode) => (
                        console.log(episode),
                    <li key={episode.id}>
                        <Link to={episode.gatsbyPath}>
                        {episode.title} (with {episode.guest?.[0]?.name})
                        </Link>
                    </li>
                    ))}
                </ul>
                <a href="https://www.learnwithjason.dev/">
                    Watch all episodes of <em>Learn With Jason</em>
                </a>
            </Layout>
        </>
    );
}   