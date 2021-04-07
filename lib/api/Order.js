import Api from './base';
import endpoints from '../../endpoints';

class OrderApi extends Api {
    constructor(req) {
        super(req);
        this.path = Api.getRoot() + endpoints.order.root;
    }

    async getOrder(query = {}) {
        return await this.get(this.path, query)();
    }

    async getAllOrders() {
        return await this.get(this.path + endpoints.order.all)();
    }

    async postOrder(data) {
        return await this.post(this.path)(data);
    }

    async deleteOrder(id) {
        return await this.delete(this.path + '/' + id)();
    }
}

export default OrderApi;
