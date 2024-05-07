import Typography from "../Title";

import Icon from "../Icon";
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';

import './styles.css'

const ListItem = ({title, editAction, deleteAction }) => {
    return(
        <div className="listItemContainer">
            <Typography title={title}/>
            <div className="listItemsActions">
                <div onClick={editAction}>
                    <Icon src={EditIcon} name="edit-icon"/>
                </div>
                <div onClick={deleteAction}>
                    <Icon src={DeleteIcon} name="delete-icon"/>
                </div>
            </div>
        </div>
    )

}

export default ListItem;