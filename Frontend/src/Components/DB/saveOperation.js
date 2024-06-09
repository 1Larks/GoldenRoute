

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
          alert('המבצע נשמר בהצלחה');
          setSaved(true);
          setSavedBackup(true);
        } else {
          // Error saving operation
          alert('שגיאה מצד השרת בשמירת המבצע');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('שגיאה בתהליך שמירת המבצע, בדוק את שורת הפקודות לעוד מידע.')
      }
    }
    else{
      alert('מבצע זה כבר שמור.')
    }
  };    

export default saveOperation;