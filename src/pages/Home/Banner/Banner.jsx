import banner from "../../../assets/images/banner-min.jpg";

const Banner = () => {
    return (
        <div>
            <img src={banner} alt="Car Toys Banner"
                className="w-full brightness-[.7]"
            />
        </div>
    );
};

export default Banner;