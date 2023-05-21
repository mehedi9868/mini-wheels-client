import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const DiscountedToys = () => {
    const [toys, setToys] = useState([]);

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
        fetch(`https://mini-wheels-server.vercel.app/discountedToys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    return (
        <div className='w-full md:w-3/4 mx-auto'>
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Discounted Toys</h2>
            <div className='grid md:grid-cols-2 gap-4' data-aos="fade-up" data-aos-delay="200">
                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default DiscountedToys;