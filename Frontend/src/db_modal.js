import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const DB_Modal = ({ showModal, onCloseModal, URL }) => {
    const [data, setData] = useState('Hello Modal');

    return (
        <Modal isOpen={showModal} onClose={onCloseModal} data={data} URL={URL}/>
    );
};

export default DB_Modal;