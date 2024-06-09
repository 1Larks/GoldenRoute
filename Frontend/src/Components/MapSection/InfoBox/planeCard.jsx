import React, { useEffect, useState, forwardRef } from 'react';

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
    if (expandedIndex !== index){
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
          <p>{format_field(plane.latitude)} :קו רוחב</p>
          <p>{format_field(plane.longitude)} :קו רוחב</p>
          <p>{format_field(plane.air_speed_in_knots)} :מהירות בקשרים</p>
          <p>{format_field(plane.true_track)} :(מעלות) כיוון טיסה</p>
          <p>{format_field(plane.squawk)} :קוד סקווק</p>
          <p>{format_field(plane.category)} :קטגוריה</p>
        </div>
      )}
    </div>
  );
});

export default PlaneCard;