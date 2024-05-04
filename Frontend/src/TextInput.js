
const InputBox = ({InputName, DisplayName, Data}) => {
    return(
        <div className = 'InputBox'>
            <h1>{DisplayName}</h1>
            <input name = {InputName} className = 'InputBox' onChange={Data} />
        </div>
    );
}

export default InputBox;