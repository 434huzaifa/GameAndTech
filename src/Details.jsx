import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {eventid}=useParams()
    const singlData=useLoaderData().find(x=>x.id==eventid)
    console.log('singlData: ', singlData);
    return (
        <div className="mx-28">
            <img src={`/event_images/${singlData.image}`} alt="" />
            <p>{singlData.title}</p>
            <p>{singlData.details}</p>
            <p>${singlData.price}</p>
            
        </div>
    );
};

export default Details;