import './App.css';

const InputBox = ({InputName, DisplayName, Data}) => {
    return(
        <div className = 'InputSection'>
            <h1>{DisplayName}</h1>
            <input name = {InputName} className = 'InputBox' onChange={Data} />
        </div>
    );
}

// const TextInput = () => {

//     return (
//         <div className='TextInput'>
//             
//         </div>
//     );

// }

export default InputBox;