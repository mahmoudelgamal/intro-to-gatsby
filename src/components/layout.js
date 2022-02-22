import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Seo } from './seo';
import '../styles/global.css';
import { header, content } from '../styles/layout.module.css';
const Layout = ({ 
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) => {
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
    return (
        <>
            <Seo 
                title={title}
                description={description}
                image={image}
                path={path}
            />
            <header className={header}>
                <Link to="/">{meta.title}</Link>
                <nav>
                    <Link to='/about'>About</Link>
                </nav>
            </header>
            <main className={content}>
                {children}
            </main>
        </>
    );
};
export default Layout;