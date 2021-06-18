export default {
    apiRoot: '',
    example: {
        root: '/example',
        all: '/all',
    },
    order: {
        root: '/order',
        all: '/all',
        cancel: '/cancel/', // :id is passed after that is why we end in /
    },
    auth: {
        root: '/auth',
        register: '/register',
        login: '/login',
    },
    user: {
        root: '/user',
        me: '/me',
    },
    job: {
        root: '/job-postings',
        department: '/departments',
    },
};
