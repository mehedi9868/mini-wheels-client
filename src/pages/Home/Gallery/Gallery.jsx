import { useEffect, useState } from "react";
import ImageCard from "./imageCard";

const Gallery = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://mini-wheels-server.vercel.app/images")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Gallery Section</h2>
            <div className="grid grid-cols-4 gap-4 w-11/12">
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