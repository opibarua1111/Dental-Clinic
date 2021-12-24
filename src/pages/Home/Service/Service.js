import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, description, img } = service;
    return (
        <div className="relative bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-3 rounded-lg">
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={img} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg font-medium">{title}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{description}</p>
                <Link to={`/servicedetail/${id}`}>
                    <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-4 transform transition">More Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;