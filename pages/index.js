import Head from 'next/head';
import HomePage from 'home/Index.js';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NewKino</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomePage />
        </div>
    );
}
