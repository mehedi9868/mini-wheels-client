import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";

import DiscountedToys from "../DiscountedToys/DiscountedToys";
import ContactUs from "../ContactUs/ContactUs";

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
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;