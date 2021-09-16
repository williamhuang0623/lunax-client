import Head from 'next/head';
import 'styles/global.css';
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

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="NewKino Studios" />
                <meta
                    name="description"
                    content="NewKino Studios is a digital world creation studio.  We collaborate with artists, musicians, and brands to build immersive worlds and tell compelling stories."
                />
                <meta
                    name="keywords"
                    content="VFX,Music Video,Art,digital art,NFT,Film,Movie,Production,World Building"
                />

                {/* Metadata */}
                <meta property="og:title" content="NewKino Studios" />
                <meta
                    property="og:image"
                    content="https://newkino.studio/global/newkinologo_square.png"
                />
                <meta property="og:image:width" content="256" />
                <meta property="og:image:height" content="256" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:url" content="https://newkino.studio" />
                <meta property="og:site_name" content="NewKino Studios" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="NewKino Studios is a digital world creation studio."
                />

                {/* Twitter Cards */}
                <meta name="twitter:title" content="NewKino Studios" />
                <meta
                    name="twitter:description"
                    content="NewKino Studios is a digital world creation studio."
                />
                <meta
                    name="twitter:image"
                    content="https://newkino.studio/global/newkinologo_square.png"
                />
                <meta name="twitter:site" content="@newkinostudios" />
                <meta name="twitter:creator" content="@newkinostudios" />

                <link rel="shortcut icon" href="/global/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/global/favicon.ico" type="image/x-icon" />
            </Head>
            <NavBarContainer />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
