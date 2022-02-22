import React from 'react';
import  Layout  from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
        }
    `);
    const posts = data.allMdx.nodes;

    return (
        <>
            <Layout>
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
            </Layout>
        </>
    );
}   