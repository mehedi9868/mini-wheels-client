
const ImageCard = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="" className="w-[200px] h-[200px]" />
        </div>
    );
};

export default ImageCard;