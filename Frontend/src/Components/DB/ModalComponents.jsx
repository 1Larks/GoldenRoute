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
            }}>טען</button>
        </div>
    );
}

const OperationsContainer = ({operations, importOperation}) => {
    return (
        <div className="operations-container">
            {operations.map((operation) => (
            <div key={operation.id} className="operation-box">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>ID: {operation.id} <br/> {operation.planes.friendlyInfo.length} :מטוסים</h3>
                    <p> 
                        {operation.hostile_plane.hostileInfo.Latitude}, {operation.hostile_plane.hostileInfo.Longitude} :קורדניאטות 
                    <br/> {operation.hostile_plane.hostileInfo.Speed} :מהירות
                    <br/> {operation.hostile_plane.hostileInfo.Radius} :רדיוס <br/> 
                    <br/> :חתימת זמן {operation.created_at}
                    </p>
                </div>
                <button onClick={() => {
                    importOperation(operation.id-1);
                }}>ייבא מבצע</button>
            </div>
            ))}
        </div>
    );
}

export {ModalInputHolder, OperationsContainer};