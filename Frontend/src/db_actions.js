
const DB_Actions = ( {URL, hostileInfo, friendlyInfo} ) => {
    
    const handleClickSave = async () => {
      try {
          // Send current operation data to the backend
          const response = await fetch(`${URL}operation/save`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              hostile_plane: {hostileInfo},
              planes: {friendlyInfo}})
          });
          console.log(response)
          // Handle response
          if (response.ok) {
            // Operation successfully saved
            console.log('Operation saved successfully');
          } else {
            // Error saving operation
            console.error('Failed to save operation');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };    

    return (
        <div>
            <button > ייבא מבצע</button>
            <button onClick={handleClickSave} > שמור מבצע </button>
        </div>
    );
}

export {DB_Actions}