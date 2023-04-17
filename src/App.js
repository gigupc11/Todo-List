import React, { useState } from 'react';
import './App.css';
import List from './components/List';


function App() {
  
  const [list,setList] = useState([])
  const [title,setTitle] = useState('')
  const [comment,setComment] = useState('')



  const titleAddHandler = (event) => {setTitle(event.target.value)}

  const commentAddHandler = (event) => {setComment(event.target.value)}

  const clickAddButtonHandler = () => {
    const newlist = {
      id : list.length + 1,
      title,
      comment,
      isdone : false
    };

    setList([...list,newlist])
  }
  const clickRemoveButtonHandler = (id) =>{
    const Removelist = list.filter(list => list.id !== id)

    setList(Removelist)
  }

  const clickDoneButtonHandler = (id) => {
    const newlist = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,    
          isdone: !item.isdone,
        };
      } else {
        return { ...item };
      }
    });

    setList(newlist);
  }
  

  return (
    <div className="all-size">
      <div className='head-area'>
        <div className='head-left'>My Todo List</div>
        <div className='head-right'>React</div>
      </div>

        <div className='input-grp'>
          <div className='input-left-grp'>
            <label className='input-text'>제목</label>
            <input className='input-box'
              value={title}
              onChange={titleAddHandler}
            />
            <label className='input-text'>내용</label>
            <input className='input-box'
              value={comment}
              onChange={commentAddHandler}/>
          </div>
          <div>
          <button className='add-button'
          onClick={clickAddButtonHandler}
          >추가하기</button>
        </div>
        </div>
        

        <h2 className='text-set'>Working...</h2>
      <div className='list-set'>
        {list.map((item)=>{
          if(item.isdone){
            return null
          }else{
            return <List
            key={item.id}
            item = {item}
            removeFunction = {clickRemoveButtonHandler}
            doneFunction = {clickDoneButtonHandler}
            />
          }
         
        })}
      </div>
        <h2 className='text-set'>Done!</h2>
      <div className='list-set'>
      {list.map((item)=>{
        if(item.isdone){
          return <List
          key={item.id}
          item = {item}
          removeFunction = {clickRemoveButtonHandler}
          doneFunction = {clickDoneButtonHandler}
          />} else {
            return null;
          }
          
        })}
      </div>

      
    </div>
  );
}

export default App;
