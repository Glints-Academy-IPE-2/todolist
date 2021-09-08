import React, { useState } from 'react';
import { 
  MDBCard, 
  MDBCardBody, 
  MDBCardText, 
  MDBCheckbox,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBInputGroupText,
} from 'mdb-react-ui-kit';
import './../App.css';

export default function Todos({ todos, setTodos }) {

  // MDB Library
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  const [inputEditId, setInputEditId] = useState(0);
  const [inputEditTaskName, setInputEditTaskName] = useState('');
  const [inputEditDescription, setInputEditDescription] = useState('');

  const updateTodoHandler = () => {
    const temp = todos.map((todo) => {
      if (todo.id !== inputEditId) {
        return todo;
      } else {
        return {...todo, taskName: inputEditTaskName, description: inputEditDescription};
      }
    });
    setTodos(temp);
    toggleShow();
  }

  const inputEditTaskNameHandler = (e) => {
    setInputEditTaskName(e.target.value);
  }

  const inputEditDescriptionHandler = (e) => {
    setInputEditDescription(e.target.value);
  }

  const editModalHandler = (id, taskName, description) => {
    toggleShow();
    setInputEditId(id);
    setInputEditTaskName(taskName);
    setInputEditDescription(description);
  }

  const statusChangeHandler = (id) => {
    const temp = todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {...todo, isCompleted: !todo.isCompleted};
        }
      });
      setTodos(temp);
  }

  const handleDelete = (id) => {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  }

  return (
    <>
      {todos.map((todo) => (
        <MDBCard 
          key={todo.id} 
          className={todo.isCompleted ? 'mx-auto my-4 isCompleted' : 'mx-auto my-4'} 
          style={{ 
            maxWidth: '22rem', 
            backgroundColor: '#272833',
            boxSizing: 'border-box',
          }}
        >
          <MDBCardBody className='mt-2' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <MDBCardText style={{ color: '#D8D8D8', display: 'flex', alignItems: 'baseline' }}>
            <MDBCheckbox
              onChange={() => statusChangeHandler(todo.id)} 
              name='flexCheck' 
              value='' 
              id='flexCheckDefault' 
              defaultChecked={todo.isCompleted}
            />
              <p className='ms-2 mt-2'>
                { todo.taskName }
              </p>
            </MDBCardText>
            <div className='m-1 pe-4 ps-1' >
              <MDBBtn 
                tag='a' 
                color='none' 
                className='m-1 ps-1' 
                style={{ color: '#D94C4C' }}
              >
                <MDBIcon fas icon="info-circle" />
              </MDBBtn>
              
              <MDBBtn 
                tag='a' 
                color='none' 
                className='m-1 ps-1' 
                style={{ color: '#D94C4C' }}
                onClick={() => editModalHandler(todo.id, todo.taskName, todo.description)}
              >
                <MDBIcon fas icon="edit" />
              </MDBBtn>
              <MDBBtn 
                tag='a' 
                color='none' 
                className='m-1 ps-1' 
                style={{ color: '#D94C4C' }}
                onClick={ () => window.confirm('Yakin?') ? handleDelete(todo.id) : 0 }
              >
                <MDBIcon far icon="trash-alt" />
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
      <MDBModal tabIndex='-1' show={centredModal} getOpenState={(e) => setCentredModal(e)}>
        <MDBModalDialog centered size='lg'>
          <MDBModalContent style={{backgroundColor: '#272833'}}>
            <MDBModalHeader>
              <p 
                style={{ color: '#D8D8D8' }}
              >
                <MDBIcon fas icon="edit" style={{ color: '#D94C4C' }} />
                <span className='ms-2'>Edit task</span>
              </p>
            </MDBModalHeader>
            <MDBModalBody>
            <div className='row ps-5'>
              <div className='col-md-5'>
                <label htmlFor='edit-task-name' className='form-label' style={{ color: '#D8D8D8',  }}>
                    Task name
                </label>
                <MDBInput 
                  className='text-light' 
                  id='edit-task-name' 
                  type='text'
                  value={ inputEditTaskName }
                  onChange={ inputEditTaskNameHandler }
                />
                <MDBInput 
                  className='mt-4 text-light' 
                  label='Description' 
                  id='textAreaExample' 
                  textarea rows={4}
                  value={ inputEditDescription }
                  onChange={ inputEditDescriptionHandler }
                />
                </div>
                <div className='col-md-5 offset-md-1'>
                  <label htmlFor='task-name' className='form-label' style={{ color: '#D8D8D8',  }}>
                      Task name
                  </label>
                  <MDBInputGroup className='mb-3'>
                    <MDBInputGroupElement type='file' id='inputGroupFile02' />
                    <MDBInputGroupText tag='label' htmlFor='inputGroupFile02'>
                      Upload
                    </MDBInputGroupText>
                  </MDBInputGroup>
                </div>
            </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn style={{ backgroundColor: '#C4C4C4', color: '#272833'}} onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn 
                style={{ backgroundColor: '#D94C4C', color: '#272833' }}
                onClick={ updateTodoHandler }
              >
                Edit task
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}