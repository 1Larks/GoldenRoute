
const InputBox = ({InputName, DisplayName, onChange}) => {
    return(
        <div className = 'InputBox'>
            <h1 className="InputTitle">{DisplayName}</h1>
            <input name = {InputName} className = 'InputBox' onChange={onChange} />
        </div>
    );
}

export default InputBox;