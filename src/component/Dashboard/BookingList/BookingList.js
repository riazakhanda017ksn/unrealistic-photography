import React, { useEffect, useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import BookList from '../BookList/BookList';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css'
const BookingList = () => {
    const [listData, setListData] = useState([])
    useEffect(() => {
        fetch('https://glacial-tundra-14316.herokuapp.com/pictures')
            .then(res => res.json())
            .then(data => setListData(data))
    }, [0])

    return (
        <div>
            <div className="booking-list-background">
                <Navbar></Navbar>
                <div className="table-div  position-relative">
                    <div className="row">
                        <div className="col-lg-2">
                          
                        </div>
                        <div className="col-lg-8">
                            <div className="table-item ">
                                <table class="table  table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Payment Id</th>
                                        </tr>
                                    </thead>

                                    {
                                        listData.map(list => <BookList listItems={list}></BookList>)
                                    }
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-2">
                          
                          </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BookingList;