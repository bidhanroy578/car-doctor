import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Aside from "./Aside";
import Bellow from "./Bellow";

const Detail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [{ facility, img, price, title, description, service_id }, setService] = useState({})
    const [serviceList, setServiceList] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                console.log(res.data)
                setTimeout(() => {
                    setService(res.data)
                    setLoading(false)
                }, 1500)
            })
        axios.get('http://localhost:3000/services')
            .then(res => {
                setServiceList(res.data.filter(item => item.service_id !== id))
            })
    }, [id])
    // console.log(facility, img, price, title, description, _id)
    return (
        <div className=" grid grid-cols-3 gap-4">
            <div className=" col-span-2 space-y-5">
                <img src={img} className="rounded-lg overflow-hidden w-full" />
                <h3 className="font-bold text-4xl">{title}</h3>
                <p>{description}</p>
                <div className="grid grid-cols-2 gap-5">
                    {
                        loading ?
                            // this is for loading skeleton while data is loading . used https://www.skeletongenerator.com/
                            <div className="col-span-2 space-y-5 animate-pulse">
                                <div className="h-96 bg-gray-200 rounded-lg overflow-hidden"></div>
                                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <div className="rounded-xl border-t-2 border-t-red-500 bg-[#f3f3f3] dark:bg-[#444444] p-10 space-y-4">
                                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rounded-xl border-t-2 border-t-red-500 bg-[#f3f3f3] dark:bg-[#444444] p-10 space-y-4">
                                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            facility.map((items, index) =>
                                <div key={index}>
                                    <div className="rounded-xl border-t-2 border-t-red-500 bg-[#f3f3f3] dark:bg-[#444444] p-10 space-y-4">
                                        <h3 className="font-bold text-xl">{items.name}</h3>
                                        <p>{items.details}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <Bellow />
            </div>
            <aside>
                <Aside price={price} serviceList={serviceList} service_id={service_id} loading={loading} />
            </aside>
        </div>
    );
};

export default Detail;