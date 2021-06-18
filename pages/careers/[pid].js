import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import JobApi from 'lib/api/Job';
import Posting from 'careers/Posting';

function JobPosting(props) {
    const [job, setJob] = useState(null);
    const [display, setDisplay] = useState('ROLE'); // Display is either ROLE or APPLY
    const router = useRouter();
    const pid = props.query.pid || router.query.pid || '';

    useEffect(async () => {
        const jobApi = new JobApi();

        if (pid) {
            const job = await jobApi.getJob(pid);
            setJob(job);
        }
    }, [pid]);

    return <Posting job={job} />;
}

JobPosting.getInitialProps = async ({ query }) => {
    return { query };
};

export default JobPosting;
