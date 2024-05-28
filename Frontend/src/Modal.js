import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, data, URL }) => {
    const [amount, setAmount] = useState(10);

    if (!isOpen) return null;
    
    const getOperations = async (amount) => {
        const operations = await fetch(`${URL}/operation?amount=${amount}`);
          // Handle response
          if (operations.ok) {
            const response = await operations.json();
            console.log(response.operations);
          } else {
            // Error saving operation
            console.error('Failed to import operations');
          }
    }

    const changeAmount = (e) => {
        const amount = e.target.value;
        setAmount(amount);
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className='ModalInput'>
                    <h1 className='InputTitle'>כמות מבצעים</h1>
                    <input className='InputBox' onChange={changeAmount}/>
                </div>
                <button onClick={ async() => {
                        await getOperations(amount);
                    }}>Load</button>
            </div>
        </div>
    );
};
 
export default Modal;