import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import SectionTwo from "../SectionTwo/SectionTwo";
import DiscountedToys from "../DiscountedToys/DiscountedToys";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mini Wheels | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <DiscountedToys></DiscountedToys>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;