import './App.css';

const TextInput = () => {

    return (
        <div className='TextInputContainer'>
            <div className='TextInput'>

                <div className='Section'>
                    <h2>:קו אורך</h2>
                    <input name='Latitude' className='InputBox' /> 
                </div>

                <div className='Section'>
                    <h2>:קו אורך</h2>
                    <input name='Longitude' className='InputBox' /> 
                </div>

                <div className='Section'>
                    <h2>:רדיוס טיסה</h2>
                    <input name='Longitude' className='InputBox' /> 
                </div>

                <div className='Section'>
                    <h2>:מהירות</h2>
                    <input name='Speed' className='InputBox' /> 
                </div>

            </div>
        </div>
    );

}

export default TextInput;