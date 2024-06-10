import React, { useEffect, useState, forwardRef } from 'react';

// If the field info is unknown then we display unknown
function format_field(field){
    return (field)?field:'Unknown';
}

const PlaneCard = forwardRef(({index, plane, expandedIndex, setExpandedIndex}, ref) => {
  const [expanded, setExpanded] = useState(false);

  // If clicked on a certain plane card, if it has already been expanded we close it and if it wasnt then we expand it and set the index.
  const toggleExpand = () => {
    setExpanded(!expanded);
    (expanded) ? setExpandedIndex(-1):setExpandedIndex(index);
    console.log(index);    
  };

  // If the expanded index has been changed, we check if the value is the plane card's index, if it is then we expand it and if it isnt we dont.
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
          <p className='danger'> מרחק מהסכנה: {format_field(plane.distance)} ק"מ</p>
          <p className='danger'> זמן סגירה: {format_field(plane.time)} דקות</p>
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