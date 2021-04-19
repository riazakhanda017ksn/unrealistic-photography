import React, { createContext, useState } from 'react';
import Home from './component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Home/Header/Header';
import LogIn from './component/LogIn/LogIn';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import Booking from './component/Dashboard/Booking/Booking';
import Bookings from './component/Dashboard/Bookings/Bookings';
import BookingSendData from './component/Dashboard/BookingSendData/BookingSendData';
import ServiceByDate from './component/Dashboard/ServiceByDate/ServiceByDate';
import Reviews from './component/Dashboard/Reviews/Reviews';
import AddBlog from './component/Dashboard/AddBlog/AddBlog';
import AddService from './component/Dashboard/Addservice/AddService';
import BookingList from './component/Dashboard/BookingList/BookingList';
import ManageOrder from './component/Dashboard/ManageOrder/ManageOrder';
import ServiceDeletes from './component/Dashboard/ServiceDelete/ServiceDeletes';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import AdminShow from './component/Dashboard/AdminShow/AdminShow';
import UserSpecificOrder from './component/Dashboard/UserSpecificOrder/UserSpecificOrder';

export const UserContext=createContext()
const App = () => {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/header">
          <Header></Header>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/logIn">
        <LogIn></LogIn>
        </Route>
        <Route path="/booking">
        <Booking></Booking>
        </Route>
        <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/reviews">
        <Reviews></Reviews>
        </PrivateRoute>
        <PrivateRoute path="/services/:_id">
        <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="/addBlog">
        <AddBlog></AddBlog>
        </PrivateRoute>
        <PrivateRoute path="/addService">
        <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/bookingList">
        <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path="/manageOrder">
         <ManageOrder></ManageOrder>
        </PrivateRoute>
        <PrivateRoute path="/manageService">
         <ServiceDeletes></ServiceDeletes>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
         <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/admin">
        <AdminShow></AdminShow>
        </PrivateRoute>
        <PrivateRoute path="/userOrder">
        <UserSpecificOrder></UserSpecificOrder>
        </PrivateRoute>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
};

export default App;