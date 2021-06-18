import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { postingStyles } from './style';
import { printJobType } from './util';

function Posting({ job, display, handleFilterClick }) {
    console.log({ job });
    if (job) {
        return (
            <div className="job-container">
                <div className="back">
                    <img src="/careers/left-arrow.svg" />
                    <Link href="/careers">
                        <span>EXPLORE OTHER JOBS</span>
                    </Link>
                </div>
                <div className="title-container">
                    <h1>{job.title}</h1>
                    <div className="job-info">
                        <span>{job.location.toUpperCase()}</span>
                        {' • '}
                        <span>{printJobType(job.job_type)}</span>
                    </div>
                    <div className="display-filters">
                        <button
                            className={display === 'ROLE' ? 'selected' : ''}
                            id="ROLE"
                            onClick={handleFilterClick}
                        >
                            Role overview
                        </button>
                        <button
                            className={display === 'APPLY' ? 'selected' : ''}
                            id="APPLY"
                            onClick={handleFilterClick}
                        >
                            How to apply
                        </button>
                    </div>
                    <div className="">
                        {display === 'ROLE' && job.copy && (
                            <ReactMarkdown>{job.copy}</ReactMarkdown>
                        )}
                        {display === 'APPLY' && job.how_to_apply && (
                            <ReactMarkdown>{job.how_to_apply}</ReactMarkdown>
                        )}
                    </div>
                </div>
                <style jsx>{postingStyles}</style>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default Posting;
