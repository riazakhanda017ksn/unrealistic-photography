import React, { useEffect, useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import AdminDetails from '../AdminDetails/AdminDetails';
import Sidebar from '../Sidebar/Sidebar';
import './AdminShow.css'
const AdminShow = () => {
    const [showAdmin,setShowAdmin]=useState([])
    useEffect(()=>{
     
        fetch('https://glacial-tundra-14316.herokuapp.com/admin')
        .then(res=>res.json())
        .then(data=>setShowAdmin(data))

    },[0])
    return (
        <div>
            <div className="banner-admin-show">
                <Navbar></Navbar>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 py-5">
                        <div className="admin-caption py-5"></div>
                        <div className="table-container">
                            <table class="table table-borderless ">
                                <thead>
                                    <tr>

                                        <th scope="col">Admin Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Delete Admin</th>

                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                      showAdmin.map(admin=><AdminDetails AdminDetailsShow={admin}></AdminDetails>)
                                  }
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AdminShow;