
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-full">
                <div className="hero  bg-base-200 w-full h-full">
                    <div className="hero-content max-w-full w-full h-full flex-col lg:flex-row ">
                        <img src="/game_event.jpg" className="rounded-lg shadow-2xl relative h-full w-full blur-sm brightness-50" />
                        <div className="absolute text-center">
                            <h1 className="text-7xl  font-bold font-rubik-font bg-gradient-to-r from-pink-500  to-indigo-500 text-transparent  bg-clip-text ">Let’s switch on the gaming mode.</h1>
                            <p className="py-6 text-xl font-semibold font-rubik-font bg-gradient-to-r from-pink-500  to-indigo-500 text-transparent bg-clip-text">We focus on Planning,Logistics,Promotion and Staff Management. So you can focus on game.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-full">
                <div className="hero  bg-base-200 w-full h-full">
                    <div className="hero-content max-w-full w-full h-full flex-col lg:flex-row ">
                        <img src="/tech_event.jpg" className="rounded-lg shadow-2xl relative h-full w-full blur-sm brightness-50 object-cover" />
                        <div className="absolute text-center">
                            <h1 className="text-5xl font-bold font-rubik-font bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Turning Tech Dreams into Reality: Your Event, Our Expertise</h1>
                            <p className="py-6 text-xl font-semibold font-rubik-font bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">We make possible what seems impossible to other.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;