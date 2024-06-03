import React from "react";
import saveOperation from "./saveOperation";
import './DB.css';

const DB_Actions = ( {URL, hostileInfo, friendlyInfo, openModal, saved, setSaved, setSavedBackup} ) => {
    return (
        <div>
            <button onClick={openModal} style={{marginLeft: 200}} > ייבא מבצע</button>
            <button onClick={() => {saveOperation(URL, hostileInfo, friendlyInfo, saved, setSaved, setSavedBackup)}} style={{marginLeft: 200}} > שמור מבצע </button>
        </div>
    );
}

export default DB_Actions;