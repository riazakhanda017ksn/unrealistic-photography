import React from 'react';

const SpecifiqOrderDetails = (props) => {
    console.log('props,',props);
    const {name,email,price,status}=props.orderDetails
    
    return (
        <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{status}</td>
      </tr>
    );
};

export default SpecifiqOrderDetails;