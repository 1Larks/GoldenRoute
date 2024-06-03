
const getOperations = async (URL, setOperations, amount) => {
    try{    
        const operations = await fetch(`${URL}/operation?amount=${amount}`);
        if (operations.ok) {
            const response = await operations.json();
            setOperations(response.operations);
            console.log(response.operations);
        } else {
            // Error recieving the operations from the DB
            alert('Failed to recive the operations');
        }}
    catch(error) {
        console.error('Error:', error);
        alert('Error in recieving the operations, Check the console for more info.');
    }
}

export default getOperations;