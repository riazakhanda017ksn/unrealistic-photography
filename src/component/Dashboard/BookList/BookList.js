import React from 'react';
import './BookList.css'
const BookList = (props) => {
    const{name,email,price,paymentId}=props.listItems
    return (
        <tr>
      <td >{name}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{paymentId}</td>
    </tr>

    );
};

export default BookList;