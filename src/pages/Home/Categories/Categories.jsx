import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from './SubCategoryCard';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
    const [sportCars, setSportCars] = useState([]);
    const [regularCars, setRegularCars] = useState([]);
    const [policeCars, setPoliceCars] = useState([]);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetch(`https://mini-wheels-server.vercel.app/searchByCategory/regularCar`)
            .then(res => res.json())
            .then(data => setRegularCars(data));

        fetch(`https://mini-wheels-server.vercel.app/searchByCategory/sportsCar`)
            .then(res => res.json())
            .then(data => setSportCars(data));

        fetch(`https://mini-wheels-server.vercel.app/searchByCategory/policeCar`)
            .then(res => res.json())
            .then(data => setPoliceCars(data));
    }, []);
    return (
        <div className='w-11/12 mx-auto' data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Shop by Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                {/* tab one */}
                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {
                            sportCars.map((car) => <SubCategoryCard
                                key={car._id}
                                car={car}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>

                {/* tab two */}
                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {
                            regularCars.map((car) => <SubCategoryCard
                                key={car._id}
                                car={car}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>

                {/* tab three */}
                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {
                            policeCars.map((car) => <SubCategoryCard
                                key={car._id}
                                car={car}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;