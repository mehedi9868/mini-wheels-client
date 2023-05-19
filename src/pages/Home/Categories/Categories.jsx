import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from './SubCategoryCard';


const Categories = () => {

    const cars = [
        {
            id: 1,
            img: 'https://example.com/image1.jpg',
        },
        {
            id: 2,
            img: 'https://example.com/image2.jpg',
        },
        {
            id: 3,
            img: 'https://example.com/image3.jpg',
        },
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Shop by Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                {/* tab one */}
                <TabPanel>
                    <div className='flex flex-col gap-4'>
                        {
                            cars.map((car) => <SubCategoryCard
                                key={car.id}
                                car={car}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>

                {/* tab two */}
                <TabPanel>
                    <div className='flex flex-col gap-4'>
                        {
                            cars.map((car) => <SubCategoryCard
                                key={car.id}
                                car={car}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>

                {/* tab three */}
                <TabPanel>
                    <div className='flex flex-col gap-4'>
                        {
                            cars.map((car) => <SubCategoryCard
                                key={car.id}
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