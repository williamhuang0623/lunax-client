import Api from './base';
import endpoints from 'endpoints';

class JobApi extends Api {
    constructor(req) {
        super(req);
        this.jobPath = Api.getCMSUrl() + endpoints.job.root;
        this.depPath = Api.getCMSUrl() + endpoints.job.department;
    }

    async getDepartments() {
        return await this.get(this.depPath)();
    }

    async getDepartment(id) {
        return await this.get(`${this.depPath}/${id}`)();
    }

    async getJob(id) {
        return await this.get(`${this.jobPath}/${id}`)();
    }
}

export default JobApi;
