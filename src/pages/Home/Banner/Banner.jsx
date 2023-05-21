import banner from "../../../assets/images/banner-min.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <img src={banner} alt="Car Toys Banner" className="w-full brightness-[.5]" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-3xl md:text-6xl font-bold text-red-400 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Discover the Thrill <br /> of <br /> Toy Cars</h2>
                <p className="text-white text-2xl hidden md:block">Immerse yourself in a world of high-speed adventure. Experience the excitement of our premium collection of realistic and meticulously designed toy cars. Ignite your imagination and race towards endless fun.</p>
            </div>
        </div>
    );
};

export default Banner;
