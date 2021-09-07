import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBInput,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from 'mdb-react-ui-kit';

export default function AddTodoModal() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <>
    <div className='text-center'>
      <MDBBtn 
        style={{
          border: '1px solid rgba(255, 255, 255, .3)', 
          backgroundColor: '#20212C',
          marginTop: '72px'
        }}
        onClick={toggleShow}
        >
          <MDBIcon fas icon='plus-circle' style={{ color: '#D94C4C' }}/>
          <span className='ms-2' style={{ color: '#D8D8D8' }}>Add task</span>
        </MDBBtn>
    </div>
    
    <MDBModal tabIndex='-1' show={centredModal} getOpenState={(e) => setCentredModal(e)}>
      <MDBModalDialog centered size='lg'>
        <MDBModalContent style={{backgroundColor: '#272833'}}>
          <MDBModalHeader>
            <p 
              style={{ color: '#D8D8D8' }}
            >
              <MDBIcon fas icon='plus-circle' style={{ color: '#D94C4C' }}/>
              <span className='ms-2'>Add task</span>
            </p>
          </MDBModalHeader>
          <MDBModalBody>
           <div className='row ps-5'>
             <div className='col-md-5'>
              <label htmlFor='task-name' className='form-label' style={{ color: '#D8D8D8',  }}>
                  Task name
              </label>
              <MDBInput id='task-name' type='text' />
              <MDBInput className='mt-3 text-light' label='Description' id='textAreaExample' textarea rows={4} />
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
            <MDBBtn style={{ backgroundColor: '#D94C4C', color: '#272833' }}>Add task</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}