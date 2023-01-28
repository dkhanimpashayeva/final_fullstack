import React from 'react'
import '../Solutions/Solutions.scss'
import { useEffect, useState } from 'react';

import axios from 'axios';


const Solutions = () => {
  
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const getData = async () => {
        const res = await axios.get('http://localhost:3030/users');
        console.log(res);
        setData(res.data);
    };
    useEffect(() => {
        getData()
    }, [])


    //delete
    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3030/users/${id}`);
        getData();
    };

    return (
        <section className="solutions">
            <div className="container">
                <div className="solutions-title">
                    <h2>Explore Our Solutions</h2>
                    <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search name" />
                </div>
                <div className="solutions-wrapper">
                    <div className="row">
                        {data.length > 0 && data
                            .filter((item) => {
                                return search.trim().toLowerCase() === ""
                                    ? item
                                    : item.name.toLowerCase().includes(search);
                            })


                            .map((e) => (

                                <div className="col-4" key={e._id} >
                                    <div className="solutions-card">
                                        <img src={e.url} alt="solutions" />
                                        <div className="card-info">
                                            <h3>{e.name}</h3>
                                            <span><img src={e.icon} alt="icon" /></span>
                                        </div>
                                        <button style={{ color: "white", backgroundColor: "#28AE60", border: "none", borderRadius: "10px", padding: "5px 30px", margin: "10px" }} className='delete-button' onClick={() => deleteData(e._id)}>Delete</button>
                                    </div>
                                </div>

                            ))



                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Solutions

