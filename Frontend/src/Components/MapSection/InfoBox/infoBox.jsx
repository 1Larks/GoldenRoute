import React, { useEffect, useRef } from 'react';
import PlaneCard from './planeCard';

const InfoBox = ({ planes, expandedIndex, setExpandedIndex, scroll, setScroll}) => {

    const planeRefs = useRef([]);

    useEffect( () => {
        if (planeRefs.current[expandedIndex]) {
            planeRefs.current[expandedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            setScroll(false);
          }
    }, [scroll])
    return (
    <div className="infoBox">
        <h3>{planes.length} Planes Detected</h3>
        <h2>Detected Planes</h2>
            <div className="plane-list" >
                {planes.map((plane, index) => (
                <PlaneCard key={index} index={index} plane={plane} 
                expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} ref={(el) => (planeRefs.current[index] = el)}/>
                ))}
            </div>
    </div>
  );
};

export default InfoBox;
