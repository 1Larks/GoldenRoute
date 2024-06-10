import React, { useState } from 'react';
import { ModalInputHolder, OperationsContainer } from './ModalComponents';

const Modal = ({ isOpen, onClose, URL, setShowInput, setHostileInfo, setPlaneData, setIsPlane, setSaved}) => {
    // Default amount of operations to load
    const [amount, setAmount] = useState(10);
    const [operations, setOperations] = useState([]);
    if (!isOpen) return null;
    
    const changeAmount = (e) => {
        const amount = e.target.value;
        setAmount(amount);
    }
    
    const importOperation = (id) => {
        setIsPlane(false);

        setHostileInfo(operations[id].hostile_plane.hostileInfo);
        setPlaneData(operations[id].planes.friendlyInfo);
        setSaved(true);
        setShowInput(false);
        
        setIsPlane(true);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <ModalInputHolder URL={URL} changeAmount={changeAmount} setOperations={setOperations} amount={amount}/>
                <OperationsContainer operations={operations} importOperation={importOperation} />
            </div>
        </div>
    );
};
 
export default Modal;