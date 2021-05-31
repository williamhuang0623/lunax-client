import Api from './base';
import endpoints from '../../endpoints';
class UserApi extends Api {
    constructor(req) {
        super(req);
        this.path = Api.getRoot() + endpoints.user.root;
    }
    async getUserProfile(authParam) {
        return await this.get(this.path + endpoints.user.me, (queryParams = authParam));
    }
}

export default UserApi;
