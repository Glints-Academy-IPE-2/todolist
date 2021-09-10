import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBInput
} from "mdb-react-ui-kit";

import folder from "../images/folder-yellow.png";

function AddTodoModal({ todos, setTodos }) {
  // changing body background color
  // document.body.style = "background: #20212C;";

  // MDB Library
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  // Code
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const inputTaskNameHandler = (e) => {
    setInputTaskName(e.target.value);
  };

  const inputDescriptionHandler = (e) => {
    setInputDescription(e.target.value);
  };

  const addTaskHandler = (e) => {
    setTodos([
      ...todos,
      {
        id: Math.round(Math.random() * 1000),
        taskName: inputTaskName,
        description: inputDescription,
        isCompleted: false,
      },
    ]);
    setInputTaskName("");
    setInputDescription("");
    toggleShow();
  };

  return (
    <>
      <div className="text-center">
        <MDBBtn
          style={{
            border: "1px solid rgba(255, 255, 255, .3)",
            backgroundColor: "#20212C",
            marginTop: "72px",
          }}
          onClick={toggleShow}
        >
          <MDBIcon fas icon="plus-circle" style={{ color: "#D94C4C" }} />
          <span className="ms-2" style={{ color: "#D8D8D8" }}>
            Add task
          </span>
        </MDBBtn>
      </div>

      <MDBModal
        tabIndex="-1"
        show={centredModal}
        getOpenState={(e) => setCentredModal(e)}
      >
        <MDBModalDialog centered size="lg">
          <MDBModalContent style={{ backgroundColor: "#272833" }}>
            <MDBModalHeader>
              <p style={{ color: "#D8D8D8" }}>
                <MDBIcon fas icon="plus-circle" style={{ color: "#D94C4C" }} />
                <span className="ms-2">Add task</span>
              </p>
            </MDBModalHeader>
            <MDBModalBody className="px-5">
              <div className="row">
                <div className="col-md-5">
                  <label
                    htmlFor="task-name"
                    className="form-label"
                    style={{ color: "#D8D8D8" }}
                  >
                    Task name
                  </label>
                  <MDBInput
                    className="text-light"
                    id="task-name"
                    type="text"
                    value={inputTaskName}
                    onChange={inputTaskNameHandler}
                  />
                  <MDBInput
                    className="mt-3 text-light"
                    label="Description"
                    id="textAreaExample"
                    textarea
                    rows={4}
                    value={inputDescription}
                    onChange={inputDescriptionHandler}
                  />
                </div>
                <div className="col-md-5 offset-md-1 my-3">
                  <div className="box-upload">
                    <div className="image-upload text-center">
                      <label htmlFor="upload-input">
                        <img
                          src={folder}
                          draggable={false}
                          alt="folder"
                          style={{ width: 80, height: 80 }}
                        />
                        <p style={{ color: "#666" }}>
                          Click to upload image
                          <p style={{ color: "#D94C4C", fontSize: "12px" }}>
                            Coming soon*
                          </p>
                        </p>
                      </label>
                      <input
                        id="upload-input"
                        type="file"
                        accept=".jpg, .gif, .jpeg, .png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                style={{ backgroundColor: "#C4C4C4", color: "#272833" }}
                onClick={toggleShow}
              >
                Close
              </MDBBtn>
              <MDBBtn
                style={{ backgroundColor: "#D94C4C", color: "#272833" }}
                onClick={addTaskHandler}
              >
                Add
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default AddTodoModal;
