import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

const Detail = () => {
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            this page is for details{id}
        </div>
    );
};

export default Detail;