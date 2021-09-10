import React, { useState } from "react";
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
} from "mdb-react-ui-kit";

import todo from "../images/logo.png";
import folder from "../images/folder-yellow.png";

function Todos({ todos, setTodos }) {
  // changing body background color
  // document.body.style = 'background: #20212C;';

  // Info Modal
  const [infoModal, setInfoModal] = useState(false);
  const toggleShowInfoModal = () => setInfoModal(!infoModal);

  // Edit Modal
  const [editModal, setEditModal] = useState(false);
  const toggleShowEditModal = () => setEditModal(!editModal);

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleShowDeleteModal = () => setDeleteModal(!deleteModal);

  const [inputId, setInputId] = useState(0);
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const updateTodoHandler = () => {
    const temp = todos.map((todo) => {
      if (todo.id !== inputId) {
        return todo;
      } else {
        return {
          ...todo,
          taskName: inputTaskName,
          description: inputDescription,
        };
      }
    });
    setTodos(temp);
    toggleShowEditModal();
  };

  const inputTaskNameHandler = (e) => {
    setInputTaskName(e.target.value);
  };

  const inputDescriptionHandler = (e) => {
    setInputDescription(e.target.value);
  };

  const infoModalHandler = (id, taskName, description) => {
    toggleShowInfoModal();
    setInputId(id);
    setInputTaskName(taskName);
    setInputDescription(description);
  };

  const editModalHandler = (id, taskName, description) => {
    toggleShowEditModal();
    setInputId(id);
    setInputTaskName(taskName);
    setInputDescription(description);
  };

  const deleteModalHandler = (id) => {
    toggleShowDeleteModal();
    setInputId(id);
  };

  const statusChangeHandler = (id) => {
    const temp = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
    });
    setTodos(temp);
  };

  const deleteHandler = () => {
    const temp = todos.filter((todo) => todo.id !== inputId);
    setTodos(temp);
    toggleShowDeleteModal();
  };

  return (
    <>
      <div className={!todos.length ? "text-center mt-5" : "visually-hidden"}>
        <img
          className="mt-5"
          src={todo}
          alt="todo"
          style={{ filter: "grayscale(100%)", opacity: ".2", width: "12%" }}
        />
      </div>
      {todos.map((todo) => (
        <MDBCard
          key={todo.id}
          className={
            todo.isCompleted ? "mx-auto my-4 isCompleted" : "mx-auto my-4"
          }
          style={{
            maxWidth: "22rem",
            backgroundColor: "#272833",
            boxSizing: "border-box",
          }}
        >
          <MDBCardBody
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <MDBCardText
              style={{
                color: "#D8D8D8",
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <MDBCheckbox
                onChange={() => statusChangeHandler(todo.id)}
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                defaultChecked={todo.isCompleted}
              />
              <p className="ms-2 mt-2">{todo.taskName}</p>
            </MDBCardText>
            <div className="m-1 pe-4 ps-1">
              {/* Info Button */}
              <MDBBtn
                tag="a"
                color="none"
                className="m-1 ps-1"
                style={{ color: "#D94C4C" }}
                onClick={() =>
                  infoModalHandler(todo.id, todo.taskName, todo.description)
                }
              >
                <MDBIcon fas icon="info-circle" />
              </MDBBtn>
              {/* Edit Button */}
              <MDBBtn
                tag="a"
                color="none"
                className="m-1 ps-1"
                style={{ color: "#D94C4C" }}
                onClick={() =>
                  editModalHandler(todo.id, todo.taskName, todo.description)
                }
              >
                <MDBIcon fas icon="edit" />
              </MDBBtn>
              {/* Delete Button */}
              <MDBBtn
                tag="a"
                color="none"
                className="m-1 ps-1"
                style={{ color: "#D94C4C" }}
                onClick={() => deleteModalHandler(todo.id)}
              >
                <MDBIcon far icon="trash-alt" />
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
      {/* Modal Info */}
      <MDBModal
        tabIndex="-1"
        show={infoModal}
        getOpenState={(e) => setInfoModal(e)}
      >
        <MDBModalDialog centered size="md">
          <MDBModalContent style={{ backgroundColor: "#272833" }}>
            <MDBModalHeader>
              <p style={{ color: "#D8D8D8" }}>
                <MDBIcon fas icon="info-circle" style={{ color: "#D94C4C" }} />
                <span className="ms-2">Task Detail</span>
              </p>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row px-5">
                <div className="col-md">
                  <h4 style={{ color: "#D8D8D8" }}> {inputTaskName} </h4>
                  {/* If there's an image */}
                  <div
                    className="visually-hidden"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      className="w-50 my-3"
                      src={todo}
                      alt="todo"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <p style={{ color: "#D8D8D8" }}> {inputDescription} </p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                style={{ backgroundColor: "#C4C4C4", color: "#272833" }}
                onClick={toggleShowInfoModal}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* Modal Edit */}
      <MDBModal
        tabIndex="-1"
        show={editModal}
        getOpenState={(e) => setEditModal(e)}
      >
        <MDBModalDialog centered size="lg">
          <MDBModalContent style={{ backgroundColor: "#272833" }}>
            <MDBModalHeader>
              <p style={{ color: "#D8D8D8" }}>
                <MDBIcon fas icon="edit" style={{ color: "#D94C4C" }} />
                <span className="ms-2">Edit task</span>
              </p>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row ps-5">
                <div className="col-md-5">
                  <label
                    htmlFor="edit-task-name"
                    className="form-label"
                    style={{ color: "#D8D8D8" }}
                  >
                    Task name
                  </label>
                  <MDBInput
                    className="text-light"
                    id="edit-task-name"
                    type="text"
                    value={inputTaskName}
                    onChange={inputTaskNameHandler}
                  />
                  <MDBInput
                    className="mt-4 text-light"
                    label="Description"
                    id="textAreaExample"
                    textarea
                    rows={4}
                    value={inputDescription}
                    onChange={inputDescriptionHandler}
                  />
                </div>
                <div className="col-md-5 offset-md-1">
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
                onClick={toggleShowEditModal}
              >
                Close
              </MDBBtn>
              <MDBBtn
                style={{ backgroundColor: "#D94C4C", color: "#272833" }}
                onClick={updateTodoHandler}
              >
                Update
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* Modal Delete */}
      <MDBModal
        tabIndex="-1"
        show={deleteModal}
        getOpenState={(e) => setDeleteModal(e)}
      >
        <MDBModalDialog size="sm">
          <MDBModalContent style={{ backgroundColor: "#272833" }}>
            <MDBModalBody>
              <h4 className="text-center p-3" style={{ color: "#D94C4C" }}>
                Are you sure?
              </h4>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                style={{ backgroundColor: "#C4C4C4", color: "#272833" }}
                onClick={toggleShowDeleteModal}
              >
                Close
              </MDBBtn>
              <MDBBtn
                style={{ backgroundColor: "#D94C4C", color: "#272833" }}
                onClick={deleteHandler}
              >
                Delete
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Todos;
