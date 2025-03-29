import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const ServiceCard = ({ service }) => {
    const navigate = useNavigate()
    const { _id, title, price, img } = service;
    const handleArrowClick = (id) => {
        navigate(`/service/detail/${id}`)
    }
    return (
        <div className="card bg-base-100 max:w-96 shadow-lg shadow-slate-700">
            <figure className="p-3">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className=" text-red-500 text-xl flex justify-between items-center">
                    <p>{price}</p>
                    <button onClick={() => handleArrowClick(_id)} className="hover:scale-110 active:scale-95 transition-transform hover:bg-red-500 hover:text-white p-2 rounded-full cursor-pointer "><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;