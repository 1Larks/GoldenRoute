import InfoBox from "./InfoBox/infoBox.jsx";
import MapComponent from "./MapComponent/MapComponent.jsx";

import './MapSection.css'

const MapSection = ({planeData, hostileInfo, expandedIndex, setExpandedIndex, scroll, setScroll}) => {

    return (
        <div className='mapSection'>
            <InfoBox planes={planeData} expandedIndex = {expandedIndex} setExpandedIndex={setExpandedIndex}
            scroll={scroll} setScroll={setScroll}/>
            
            <MapComponent hostileInfo={hostileInfo} friendlyInfo={planeData} expanded_index={expandedIndex}
            setExpandedIndex={setExpandedIndex} setScroll={setScroll}/>
        </div>
    );

}


export default MapSection;