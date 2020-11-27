import * as React from 'react'

import { Helmet } from 'react-helmet'

interface PageProps {}

export default function Page (props:PageProps) {
    return (
        <section >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blank Gatsby TypeScript Starter By KevinJonathan911</title>
            </Helmet>
            <div >
                    <h1>Enjoy your Blank Gatsby Typescript Starter!</h1>
                    <h3 style={{fontWeight:400}}>Vanilla Gastby Starter with TypeScript and Thats all!</h3>
                    <p style={{fontSize:14}}>Made with love by <a href="https://www.jojobug.com">Kevin Jonathan</a>.</p>
            </div>
        </section>
    )
}
