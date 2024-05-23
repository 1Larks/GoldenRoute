import React from "react";
 
const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
 
    return (
        // <div
        //     onClick={onClose}
        //     style={{
        //         position: "fixed",
        //         top: 0,
        //         left: 0,
        //         width: "100%",
        //         height: "100%",
        //         background: "rgba(0, 0, 0, 0.5)",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //     }}
        // >
        //     <div className="Modal">
        //         {children}
        //     </div>
        // </div>
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {data ? (
                    <div>
                        {/* Render your data here */}
                        <h1>{data}</h1>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
 
export default Modal;