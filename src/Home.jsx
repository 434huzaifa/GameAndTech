import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Ongoing from "./Ongoing";
import Review from "./Review";
import Features from "./Features";
import Services from "./Services"
const Home = () => {
    const features =useLoaderData()
    return (
        <div className="mx-28">
            <Banner></Banner>
            <div className="divider font-pixel-font font-extrabold text-7xl my-16">Our Services</div>
            <Services></Services>
            <div className="divider font-pixel-font font-extrabold text-7xl my-16">Our Features</div>
            <Features features={features}></Features>
            <div className="divider font-pixel-font font-extrabold text-7xl my-16">Our Features</div>
            <Ongoing></Ongoing>
            <div className="divider font-pixel-font font-extrabold text-7xl my-16">Our Features</div>
            <Review></Review>
        </div>
    );
};

export default Home;