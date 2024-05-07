import Icon from "../Icon";
import CloseIcon from '../../assets/close.svg';
import './styles.css'

const Modal = ({children, isOpen, onClose}) => {
    return (
        <>
            {isOpen && (
                <div className="modalContainer">
                    <div className="modalChildren">
                        {children}
                        <div onClick={onClose} className="modalCloseIcon">
                            <Icon src={CloseIcon} name='clone-icon'/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;