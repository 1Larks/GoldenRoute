import getOperations from './getOperations.js';

const ModalInputHolder = ({URL, changeAmount, setOperations, amount}) => {
    return (
        <div className='modalInputHolder'>
            <div className='ModalInput' style={{marginLeft: 25}}>
                <h1 className='InputTitle'>כמות מבצעים</h1>
                <input className='InputBox' onChange={changeAmount}/>
            </div>
            <button onClick={ async() => {
                await getOperations(URL, setOperations, amount);
            }}>Load</button>
        </div>
    );
}

const OperationsContainer = ({operations, importOperation}) => {
    return (
        <div className="operations-container">
            {operations.map((operation) => (
            <div key={operation.id} className="operation-box">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>ID: {operation.id} <br/> Planes: {operation.planes.friendlyInfo.length}</h3>
                    <p> 
                        Coordinates: {operation.hostile_plane.hostileInfo.Latitude}, {operation.hostile_plane.hostileInfo.Longitude}
                    <br/> Speed: {operation.hostile_plane.hostileInfo.Speed} 
                    <br/> Radius: {operation.hostile_plane.hostileInfo.Radius} <br/> 
                    <br/> Timestamp: {operation.created_at}
                    </p>
                </div>
                <button onClick={() => {
                    importOperation(operation.id-1);
                }}>Import Operation</button>
            </div>
            ))}
        </div>
    );
}

export {ModalInputHolder, OperationsContainer};