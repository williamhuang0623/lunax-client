import Head from 'next/head';
import 'styles/global.css';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import NavBarContainer from 'component/NavBarContainer';

function MyApp({ Component, pageProps, router }) {
    if (router.pathname.startsWith('/admin')) {
        return <Component {...pageProps} />;
    }
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <NavBarContainer />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
