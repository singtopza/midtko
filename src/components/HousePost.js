function HousePost(props) {
    const { house, onBgClick } = props;
    return (
        <div>
            <div onClick={onBgClick} />
            <div>
                <img src={house.fullUrl} />
                <h3>{house.title}</h3>
            </div>
        </div>
    );
}

export default HousePost;