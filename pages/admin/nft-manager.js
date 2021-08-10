import React from 'react';
import AdminLayout from 'layout/admin/layout';

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AdminLayout>
                <h1>NFT Manager</h1>
            </AdminLayout>
        );
    }
}

export default Admin;
