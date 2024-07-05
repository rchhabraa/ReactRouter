import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{setdata(data)})
    },[])
    return (
        <div className=' text-center bg-gray-500 text-white p-4 rounded-lg text-3xl'>
            Github Followers:{data.followers}
            <img className='  py-6 rounded-lg'  src={data.avatar_url} width={300}  />
        </div>
    );
}

export default Github;