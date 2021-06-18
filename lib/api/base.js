import 'cross-fetch/polyfill';

import { cookieObjToStr, formatQueryParams } from './util';

import { ServerError, UnknownError } from './errors';
import endpoints from '../../endpoints';

let HOST;
switch (process.env.NEXT_PUBLIC_ENV) {
    case 'local':
        HOST = process.env.NEXT_PUBLIC_LOCAL_HOST;
        break;
    case 'development':
        HOST = process.env.NEXT_PUBLIC_DEV_HOST;
        break;
    case 'production':
        HOST = process.env.NEXT_PUBLIC_PROD_HOST;
        break;
    default:
        throw new Error('process.env.NEXT_PUBLIC_ENV not assigned properly');
        break;
}

export default class Api {
    /**
     * Any API call from getInitialProps must pass the request object to this constructor
     */
    constructor(req) {
        if (req) {
            this.setCookie(cookieObjToStr(req.cookies));
            this.setAuthHeader(req.get('Authorization'));
        }
    }

    setCookie(cookie) {
        this.cookie = cookie;
    }

    setAuthHeader(authHeader) {
        this.authHeader = authHeader;
    }

    static getRoot() {
        return endpoints.apiRoot;
    }

    static getCMSUrl() {
        return process.env.NEXT_PUBLIC_CMS_HOST;
    }

    nFetch(input, init) {
        if (init) {
            const headers = { ...init.headers };

            if (!process.browser) {
                headers.cookie = this.cookie;
                headers.Authorization = this.authHeader;
            }
            init.headers = headers;

            return fetch(input, init);
        } else {
            return fetch(input);
        }
    }

    removeSensitiveData() {
        this.cookie = null;
        this.authHeader = null;
    }

    handleErr(err, url) {
        if (err instanceof ServerError) {
            // const skipLog = new RegExp(/\/users\/me$/);
            // if (!skipLog.test(url)) {
            //     console.log(err, url);
            // }
            throw err;
        } else {
            console.log('There was an unknown error!');
            console.error(err.message);
            throw new UnknownError();
        }
    }

    post(path, queryParams = {}, otherHeaders = {}) {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...otherHeaders,
        };

        return async (data = {}) => {
            const body = JSON.stringify(data);
            const formattedParams = formatQueryParams(queryParams);
            const url = HOST + path;

            try {
                const response = await this.nFetch(url + formattedParams, {
                    method: 'POST',
                    headers,
                    body,
                });
                const json = await response.json();
                if (json.error) {
                    throw new ServerError(json.msg || 'Unexpected server error', response.status);
                } else {
                    return json.data;
                }
            } catch (err) {
                this.handleErr(err, url);
            }
        };
    }

    put(path, otherHeaders) {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...otherHeaders,
        };

        return async (data) => {
            const body = JSON.stringify(data);
            const url = HOST + path;

            try {
                const response = await this.nFetch(url, {
                    method: 'PUT',
                    headers,
                    body,
                });

                const json = await response.json();
                if (json.error) {
                    throw new ServerError(json.msg || 'Unexpected server error', response.status);
                } else {
                    return json.data;
                }
            } catch (err) {
                this.handleErr(err, url);
            }
        };
    }

    patch(path, otherHeaders) {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...otherHeaders,
        };

        return async (data) => {
            const body = JSON.stringify(data);
            const url = HOST + path;

            try {
                const response = await this.nFetch(url, {
                    method: 'PATCH',
                    headers,
                    body,
                });

                const json = await response.json();
                if (json.error) {
                    throw new ServerError(json.msg || 'Unexpected server error', response.status);
                } else {
                    return json.data;
                }
            } catch (err) {
                this.handleErr(err, url);
            }
        };
    }

    get(path, queryParams = {}, otherHeaders = {}, signal = undefined) {
        const headers = {
            Accept: 'application/json',
            ...otherHeaders,
        };
        const formattedParams = formatQueryParams(queryParams);
        let url;

        // Check if only path or full url
        if (path.substr(0, 1) !== '/') {
            url = path;
        } else {
            url = HOST + path;
        }

        // Add query params
        if (formattedParams) {
            url = url + '?' + formattedParams;
        }

        return async () => {
            try {
                const response = await this.nFetch(url, {
                    method: 'GET',
                    headers,
                    signal,
                });
                const json = await response.json();
                if (json.error) {
                    throw new ServerError(json.msg || 'Unexpected server error', response.status);
                } else {
                    return json.data || json;
                }
            } catch (err) {
                if (err.name !== 'AbortError') {
                    this.handleErr(err, url);
                }
            }
        };
    }

    delete(path) {
        const headers = {
            Accept: 'application/json',
        };
        const url = HOST + path;

        return async () => {
            try {
                const response = await this.nFetch(url, {
                    method: 'DELETE',
                    headers,
                });

                const json = await response.json();
                if (json.error) {
                    throw new ServerError(json.msg || 'Unexpected server error', response.status);
                } else {
                    return json.data;
                }
            } catch (err) {
                this.handleErr(err, url);
            }
        };
    }
}
