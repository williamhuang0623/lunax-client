import Api from './base';
import { mumbaiGasStation, polygonGasStation } from 'lib/constants';

class PolygonApi extends Api {
    constructor(req) {
        super(req);
        this.mumbaiPath = mumbaiGasStation;
        this.polygonPath = polygonGasStation;
    }

    async getGas(query = {}) {
        if (process.env.SMART_CONTRACT_ENV == 'testnet') {
            return await this.get(this.mumbaiPath, query)();
        } else if (process.env.SMART_CONTRACT_ENV == 'mainnet') {
            return await this.get(this.polygonPath, query)();
        }
        //no fees on localhost
        else {
            return { fast: 1 };
        }
    }
}

export default PolygonApi;
