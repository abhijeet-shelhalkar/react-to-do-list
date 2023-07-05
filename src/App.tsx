import { useState } from 'react';
import './App.css';
import TaskItem from './components/TaskItem/TaskItem';

const TO_DO_LIST: any[] = [{id: 1, name:"work hard"}];

function App() {

  const [todoList, setTodoList] = useState(TO_DO_LIST);
  const [taskName, setTaskName] = useState('');
  const [isUpdate, setUpdateMode] = useState(false);
  const [editItem, setEditItem] = useState({id: '', name: ''});

  const onAddListItemHandler = () => {
    if(taskName) {
      const itemName = { id: todoList.length + 1, name: taskName };
      setTodoList(previousState => {
        return [...previousState, itemName];
      });
      setTaskName('');
    }
  }

  const onUpdateListItemHandler = () => {
    setTodoList(previousState => {
      const index = previousState.map(item => item.id).indexOf(editItem.id);
      previousState[index].name = taskName;
      return [...previousState];
    });
    setTaskName('');
    setUpdateMode(false);
  }

  const onCancelHandler = () => {
    if(taskName) {
      setTaskName('');
      setUpdateMode(false);
    }
  }

  const deleteTaskItem = (id: any) => {
    const removeIndex = todoList.map(item => item.id).indexOf(id);
    todoList.splice(removeIndex, 1);
    setTodoList((prevData) => {
     return [...prevData];
    });
  }

  const editTaskItem = (item: any) => {
    setEditItem(item);
    setTaskName(item.name);
    setUpdateMode(true);
    document.getElementById('item-input')?.focus();
  }

  const onChangeTaskName = (event: any) => {
    setTaskName(event.target.value);
  }

  return (
    <>
    <div className='main'>
      <div className='input-box'>
        <div className='title-text'>To Do List</div>
        <input type="text" name="add item" id="item-input" placeholder="Add Item..." value={taskName} onChange={onChangeTaskName}/>
        <div className='btn-box'>
          { isUpdate ? <button className='add-btn button-4' type="button" onClick={onUpdateListItemHandler}>Update</button> 
            : <button className='add-btn button-4' type="button" onClick={onAddListItemHandler}>Add</button>
          }
          <button className='cancel-btn button-4' type="button" onClick={onCancelHandler} disabled={!taskName}>Cancel</button>
        </div>
      </div>
      <div className="list-box">
        {todoList.map((item, index) => {
            return (
              <TaskItem key={index} itemdata={item} onDeleteHandler={deleteTaskItem} onEditHandler={editTaskItem}></TaskItem>
            )
          })}
      </div>
    </div>
    </>
  )
}

export default App
