import Api from './base';
import endpoints from '../../endpoints';

class AuthApi extends Api {
    constructor(req) {
        super(req);
        this.path = Api.getRoot() + endpoints.auth.root;
    }
    async register(data) {
        return await this.post(this.path + endpoints.auth.register)(data);
    }
    async login(data) {
        return await this.post(this.path + endpoints.auth.login)(data);
    }
    async logout() {
        localStorage.removeItem('token');
    }
}

export default AuthApi;
