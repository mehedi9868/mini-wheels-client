import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-red text-center my-20">Shop by Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                {/* tab one */}
                <TabPanel>
                    <div className='flex gap-4'>
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                    </div>
                </TabPanel>

                {/* tab two */}
                <TabPanel>
                    <div className='flex gap-4'>
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                    </div>
                </TabPanel>

                {/* tab three */}
                <TabPanel>
                    <div className='flex gap-4'>
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                        <img src="" alt="" className="w-[200px] h-[200px]" />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;