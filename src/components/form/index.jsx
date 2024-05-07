import Typography from "../Title";
import Input from "../input";
import Button from "../button";
import './styles.css'

const Form = ({
    title, 
    tag, 
    inputValue, 
    onChange, 
    placeholder, 
    buttonTitle, 
    buttonAction,
    buttonDisabled
}) => {
    return(
        <div className="styledForm">
            <div>
                <Typography title={title} tag={tag}/>
                <Input 
                    value={inputValue} 
                    onChange={onChange} 
                    placeholder={placeholder}
                />
            </div>
            <Button 
                onClick={buttonAction}
                disabled={buttonDisabled}
            >{buttonTitle}</Button>
        </div>
    )
}

export default Form;