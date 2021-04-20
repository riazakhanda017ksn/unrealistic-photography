import React, { useEffect, useState } from 'react';
import './ServiceDeletes.css'
import DeleteService from '../DeleteService/DeleteService';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
const ServiceDeletes = () => {

        const [DeleteServiceData, setDeleteServiceData] = useState([])
         useEffect(() => {
            fetch('https://glacial-tundra-14316.herokuapp.com/addService')
                .then(res => res.json())
                .then(data => setDeleteServiceData(data))
        }, [0])
    return (
        <div>
        <div className="delete-service">
            <Navbar></Navbar>
            <div >

                <div className="row  ">

                  <div className="col-lg-3">
                      <Sidebar></Sidebar>
                  </div>
                  <div className="col-lg-9 py-5">
                  <h1 className='text-light text-center py-5 '>Service <span className='text-danger'>Management</span></h1>
                        <div className="service-table py-5">
                            <table class="table table-borderless text-center">
                                
                                <thead>
                                    <tr>
                                        <th scope="col"> Service Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Delete Service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        DeleteServiceData.map(deleteServiceItem=><DeleteService servicesDeleteItem={deleteServiceItem}></DeleteService>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default ServiceDeletes;