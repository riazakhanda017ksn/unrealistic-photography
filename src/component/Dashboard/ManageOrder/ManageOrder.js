import React, { useEffect, useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import ManageOrderDetails from '../ManageOrderDetails/ManageOrderDetails';
import Sidebar from '../Sidebar/Sidebar';
import './ManageOrder.css'

const ManageOrder = () => {
   const [order,setOrder]=useState([])
  useEffect(()=>{
    fetch('https://glacial-tundra-14316.herokuapp.com/pictures')
    .then(res=>res.json())
    .then(data=>setOrder(data))
  },[0])
    return (
        <div>
            <div className='background-black'>
                 <Navbar></Navbar>
                     <div className="row">
                     <div className="col-lg-3">
                         <Sidebar></Sidebar>
                     </div>
                     <div className="col-lg-9 py-5">
                     <div className="table-of-manage-order py-5">
                     <table class="table table-borderless py-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Payment Id</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Order Delete</th>
                                        </tr>
                                    </thead>

                                    {
                                        order.map(list => <ManageOrderDetails listItems={list}></ManageOrderDetails >)
                                    }
                                    <tbody>

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

export default ManageOrder;