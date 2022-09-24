import React from 'react';
import {usestate} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
    const [modalIsOpen ,setModalIsOpen]= usestate(false);
    function deletehandler(){
        setModalIsOpen(true);
    }
return (

      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deletehandler}>Delete</button>
        </div>
        {modalIsOpen ? <Modal/> :null}
        {modalIsOpen ? <Backdrop/>:null }
      </div>
  );
}
export default Todo;
