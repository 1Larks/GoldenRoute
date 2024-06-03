

const saveOperation = async (URL, hostileInfo, friendlyInfo, saved, setSaved, setSavedBackup) => {
    if (!saved){
      try {
        // Send current operation data to the backend
        const response = await fetch(`${URL}/operation/save`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            hostile_plane: {hostileInfo},
            planes: {friendlyInfo}})
        });
        if (response.ok) {
          // Operation successfully saved
          alert('Operation saved successfully');
          setSaved(true);
          setSavedBackup(true);
        } else {
          // Error saving operation
          alert('Failed to save operation');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error in saving the operation, Check the console for more info.')
      }
    }
    else{
      alert('This operation has already been saved.\nYou really love pushing the boundries don\'t you?')
    }
  };    

export default saveOperation;