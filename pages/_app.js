import Head from 'next/head';
import { Container } from 'next/app';
import 'styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </Container>
    );
}

export default MyApp;
