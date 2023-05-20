import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mini Wheels | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;