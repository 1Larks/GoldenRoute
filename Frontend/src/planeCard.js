import React, { useEffect, useState, forwardRef } from 'react';
import './App.css';

function format_field(field){
    return (field)?field:'Unknown';
}

const PlaneCard = forwardRef(({index, plane, expandedIndex, setExpandedIndex}, ref) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
    (expanded) ? setExpandedIndex(-1):setExpandedIndex(index);
    console.log(index);    
  };

  useEffect( ()=>{
    if (expandedIndex != index){
        setExpanded(false);
    }
    else {
        setExpanded(true);
    }
  }, [expandedIndex] );
  
  return (
    <div ref={ref} className="planeCard" onClick={toggleExpand}>
      <h1>{(plane.description)?plane.description:'Unknown'}</h1>
      {expanded && (
        <div>
          <p className='danger'>Danger Distance: {format_field(plane.distance)} Km</p>
          <p className='danger'>Time To Escape: {format_field(plane.time)} Minutes</p>
          <p>Latitude: {format_field(plane.latitude)}</p>
          <p>Longitude: {format_field(plane.longitude)}</p>
          <p>Speed: {format_field(plane.air_speed_in_knots)} Knots</p>
          <p>Track: {format_field(plane.true_track)} Degrees</p>
          <p>Squawk: {format_field(plane.squawk)}</p>
          <p>Category: {format_field(plane.category)}</p>
        </div>
      )}
    </div>
  );
});

export default PlaneCard;