import { useEffect, useState } from "react";
import Card2 from "./Card2";
const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch('/services.json').then(res => res.json()).then(data => setServices(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                services?.map((x)=>{
                    return <Card2 image={x.image} id={x.id} details={x.details} title={x.title} key={x.id} ></Card2>
                })
            }
        </div>
    );
};

export default Services;