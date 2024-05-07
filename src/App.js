import { useState } from 'react';
import Typography from "./components/Title";
import Input from "./components/input";
import Button from "./components/button";
import Form from './components/form';
import ListItem from './components/ListItem';
import Modal from './components/Modal';

function App() {
  const [toDoTitle, setToDoTitle] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [editToDo, setEditToDo] = useState('')
  const [toDoEdit, setToDoEdit] = useState(false)

  const addToDo = () => {
    const nonUniq = toDoList.some(item => item === toDoTitle);
    if(nonUniq) return alert('please insert uniq title');
    const newValue = [...toDoList, toDoTitle]
    setToDoList(newValue)
    setToDoTitle('')
  }

  const deleteToDo = (title) => {
      const newList = toDoList.filter(item => item !== title)
      setToDoList([...newList])
  }

  const handlerEditToDo = () => {
    const newList = toDoList.map(item => {
      if(item === toDoEdit){
        return editToDo;
      }
      return item;
    })
    setToDoList(newList)
    setToDoEdit('')

  }


  const renderList = toDoList.map((item, idx) => {
    return <ListItem 
              title={item} 
              key={idx}
              deleteAction={()=>{ deleteToDo(item)}}
              editAction={() => {
                 setEditToDo(item)
                 setToDoEdit(item)
                }}
            />
  })

  const handleChangeToDoTitle = (event) => {
    setToDoTitle(event.target.value)
  }
  
  return (
    <div>
      <Typography 
        title ='to do list' 
        tag='h1'
      />
      <Form 
        title="Add todo" 
        tag="p" 
        value={toDoTitle}
        onChange={handleChangeToDoTitle}
        placeholder="add title"
        buttonTitle="add todo"
        buttonAction={addToDo}
        buttonDisabled = {!toDoTitle.trim()}
      />
        
        {renderList}

        <Modal isOpen={toDoEdit} onClose={()=>setToDoEdit('')}>
          <Form 
            title="Edit" 
            tag="p" 
            value={editToDo}
            onChange={(e) => setEditToDo(e.target.value)}
            placeholder="edit"
            buttonTitle="edit"
            buttonAction={handlerEditToDo}
            buttonDisabled = {!editToDo.trim()}
          />

        </Modal>
        
    </div>
  );
}

export default App;
