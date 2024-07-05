import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {
    const {id}=useParams()
    return (
        <div className=' bg-gray-500 p-4 text-white'>
           User:{id} 
        </div>
    );
}

export default User;