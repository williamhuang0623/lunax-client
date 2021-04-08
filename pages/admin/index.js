import React from 'react';
import AdminDashboard from 'admin';
import Sidebar from 'component/AdminSideBar';

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {/* <Sidebar /> */}
                <AdminDashboard />
            </>
        );
    }
}

export default Admin;
