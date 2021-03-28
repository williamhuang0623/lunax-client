import Api from './base';
import endpoints from '../../endpoints';

class ExampleApi extends Api {
    constructor(req) {
        super(req);
        this.path = Api.getRoot() + endpoints.example.root;
    }

    async getExample(query = {}) {
        return await this.get(this.path, query)();
    }

    async getAllExamples() {
        return await this.get(this.path + endpoints.example.all)();
    }

    async putExample(data) {
        return await this.put(this.path)(data);
    }

    async patchExample(data) {
        return await this.patch(this.path)(data);
    }

    async postExample(data) {
        return await this.post(this.path)(data);
    }

    async deleteExample(id) {
        return await this.delete(this.path + '/' + id)();
    }
}

export default ExampleApi;
