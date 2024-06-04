
const InputBox = ({InputName, DisplayName, onChange, onKey}) => {
    return(
        <div className = 'InputBox'>
            <h1 className="InputTitle">{DisplayName}</h1>
            <input name = {InputName} className = 'InputBox' onChange={onChange} onKeyPress={onKey}/>
        </div>
    );
}

export default InputBox;