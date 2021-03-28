export class ServerError extends Error {
    constructor(msg, statusCode) {
        super(msg);
        this.name = 'SERVER_ERROR';
        this.statusCode = statusCode || 500;
    }
}

export class UnknownError extends Error {
    constructor(msg) {
        super(msg || 'There was an unknown error.');
        this.name = 'UNKNOWN_ERROR';
    }
}
