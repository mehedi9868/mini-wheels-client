
const ImageCard = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="" className="w-[auto] h-[auto] rounded" />
        </div>
    );
};

export default ImageCard;