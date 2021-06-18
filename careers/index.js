import React from 'react';
import JobApi from 'lib/api/Job';
import { withRouter } from 'next/router';

import { careerStyles } from './style';

class CareersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobCount: 0,
            departments: [],
            selectedDep: null,
        };

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.handleJobClick = this.handleJobClick.bind(this);
    }

    async componentDidMount() {
        const jobApi = new JobApi();

        try {
            const departments = await jobApi.getDepartments();

            this.setState({
                jobCount: this.countJobPostings(departments),
                departments,
                selectedDep: departments[0],
            });
        } catch (e) {
            console.error(e);
        }
    }

    countJobPostings(departments) {
        let count = 0;
        for (let dep of departments) {
            if (dep.job_postings) {
                count += dep.job_postings.length;
            }
        }
        return count;
    }

    handleFilterClick(e) {
        const id = e.target.getAttribute('id');

        if (parseInt(id) > -1) {
            this.setState({
                selectedDep: this.state.departments[id],
            });
        }
    }

    async handleJobClick(e) {
        const id = e.currentTarget.getAttribute('id');

        await this.props.router.push(`/careers/${id}`);
    }

    printJobType(job_type) {
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

    render() {
        const { jobCount, departments, selectedDep } = this.state;

        return (
            <div className="careers-container">
                <div className="banner">
                    <div className="overlay"></div>
                    <div className="text-container">
                        <h1>Careers at NewKino</h1>
                        <p>Building a team of the endlessly curious.</p>
                    </div>
                </div>

                <div className="jobs-container">
                    <div className="jobs-description">
                        <h3 className="job-title">All Available Jobs</h3>
                        <p className="job-count">{jobCount} job postings</p>
                    </div>
                    <div className="jobs-wrapper">
                        <div className="jobs-filters">
                            {departments.length &&
                                departments.map((dep, i) => {
                                    return (
                                        <button
                                            onClick={this.handleFilterClick}
                                            id={i}
                                            className="filter-button"
                                            key={i}
                                        >
                                            {dep.name}{' '}
                                            {dep.job_postings &&
                                                '(' + dep.job_postings.length + ')'}
                                        </button>
                                    );
                                })}
                        </div>
                        <div className="jobs-listings">
                            {selectedDep && !selectedDep.job_postings.length && (
                                <div class="no-job-error">
                                    Sorry, there are no {selectedDep.name} jobs at this time. <br />
                                    We encourage you to keep checking as opportunities come up
                                    often!
                                </div>
                            )}
                            {selectedDep && selectedDep.job_postings.length
                                ? selectedDep.job_postings.map((job, i) => {
                                      return (
                                          <div
                                              className="job-posting"
                                              key={i}
                                              id={job._id}
                                              onClick={this.handleJobClick}
                                          >
                                              <p>{job.title}</p>
                                              <div>
                                                  <span>{job.location.toUpperCase()}</span>
                                                  {' • '}
                                                  <span>{this.printJobType(job.job_type)}</span>
                                              </div>
                                          </div>
                                      );
                                  })
                                : ''}
                        </div>
                    </div>
                </div>
                <style jsx>{careerStyles}</style>
            </div>
        );
    }
}

export default withRouter(CareersPage);
