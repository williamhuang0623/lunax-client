export function printJobType(job_type) {
    let job = '';
    switch (job_type) {
        case 'contractor':
            job = 'Contractor';
            break;
        case 'internship':
            job = 'Internship';
            break;
        case 'full':
            job = 'Full-time';
            break;
        case 'part':
            job = 'Part-time';
            break;
        default:
            break;
    }

    return job;
}
