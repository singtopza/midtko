import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppBanner from './components/AppBanner';
import AppHouse from './components/AppHouse';
import HouseItem from './components/HouseItem';
import HousePost from './components/HousePost';
import Houses from './data/Houses';

function App() {
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onHouseOpenClick(House) {
        setSelectedHouse(House);
    }

    function onHouseCloseClick() {
        setSelectedHouse(null);
    }

    const HouseItems = Houses.filter((House) => {
        return House.title.includes(searchText);
    }).map((House, index) => {
        return <HouseItem key={index} House={House} onHouseClick={onHouseOpenClick} />;
    });

    let HousePost = null;
    if (!!selectedHouse) {
        HousePost = <HousePost House={selectedHouse} onBgClick={onHouseCloseClick} />;
    }

    return (
        <div className="app">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css?fbclid=IwAR2A_gIgSd02pf_TJyXs8tVDtZtOgSn_SFuWWlIl7ucriRRCxctD0WqxX4A"></link>
            <AppHeader />
            <AppBanner />
            <AppHouse />
            <section className="app-section">
                <div className="app-container">
                    <div className="app-grid">
                        {HouseItems}
                    </div>
                </div>
            </section>
            {HousePost}
        </div>
    );
}

export default App;
