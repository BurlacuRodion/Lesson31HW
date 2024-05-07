import './styles.css';

const Button = ({children, onClick, disabled}) => {
    return (
    <button 
        onClick={onClick} 
        className='styledButton'
        disabled = {disabled}
        >{children}
    </button>
    )
}
export default Button;