import Head from 'next/head';
import HomePage from 'home';
import ExampleApi from 'lib/api/Example';

export default function Home({ result }) {
    return (
        <div>
            <Head>
                <title>NewKino Studios</title>
            </Head>

            <HomePage />
        </div>
    );
}

/* Example code for how to run queries

export async function getStaticProps({ req }) {
    const exampleApi = new ExampleApi();
    const query = {
        id: 1,
    };
    const data = {
        id: 2,
    };
    const deleteId = 1;

    const getResult = await exampleApi.getExample(query);
    const postResult = await exampleApi.postExample(data);
    const putResult = await exampleApi.putExample(data);
    const patchResult = await exampleApi.patchExample(data);
    const deleteResult = await exampleApi.deleteExample(deleteId);

    return {
        props: {
            getResult,
            postResult,
            putResult,
            patchResult,
            deleteResult,
        },
    };
}

*/
