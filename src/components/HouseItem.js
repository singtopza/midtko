function HouseItem(props) {
    const { House, onHouseClick } = props;
    return (
        <div className="House-item">
            <img src={House.thumbnailUrl} onClick={() => onHouseClick(House)} />
            <h4>{House.title}</h4>
        </div>
    );
}

export default HouseItem;