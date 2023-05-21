import { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const [items, setItems] = useState([]);

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
        fetch("https://mini-wheels-server.vercel.app/images")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Gallery Section</h2>
            <div className="grid md:grid-cols-4 gap-4 w-11/12" data-aos="fade-up" data-aos-delay="200">
                {
                    items.map(item => <ImageCard
                        key={item._id}
                        item={item}
                    ></ImageCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;