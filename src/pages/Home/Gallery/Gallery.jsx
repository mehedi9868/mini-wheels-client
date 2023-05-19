import ImageCard from "./imageCard";

const Gallery = () => {
    const items = [
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
        {
            id: 4,
            img: 'https://example.com/image4.jpg',
        },
        {
            id: 5,
            img: 'https://example.com/image5.jpg',
        },
        {
            id: 6,
            img: 'https://example.com/image6.jpg',
        },
        {
            id: 7,
            img: 'https://example.com/image7.jpg',
        },
        {
            id: 8,
            img: 'https://example.com/image8.jpg',
        },
        {
            id: 9,
            img: 'https://example.com/image9.jpg',
        },
        {
            id: 10,
            img: 'https://example.com/image10.jpg',
        },
        {
            id: 11,
            img: 'https://example.com/image11.jpg',
        },
        {
            id: 12,
            img: 'https://example.com/image12.jpg',
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-red text-center my-20">Gallery Section</h2>
            <div className="grid grid-cols-6 gap-4">
                {
                    items.map(item => <ImageCard
                        key={item.id}
                        item={item}
                    ></ImageCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;