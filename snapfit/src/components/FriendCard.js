import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import FriendCardSchedule from "./FriednCardSchedule";
import Modal from "react-modal";
import "../styles/friendcard.css";

function FriendCard(props) {
  const friendID = props.friendID;
  const userImage = props.userImage;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSchedule() {
    setOpenSchedule(!openSchedule);
  }

  function handleSendMassage() {
    alert("Send");
    closeModal();
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  return (
    <Card className="friendcard-box">
      <div className="d-flex justify-content-center">
        <Image className="image-size p-1" roundedCircle src={userImage} alt="user-image" />
      </div>
      <div className="friendcard-username d-flex justify-content-center">name</div>
      {openSchedule && <FriendCardSchedule />}
      <div className="friend-card-btn-box d-flex justify-content-between">
        {!openSchedule ? (
          <Button onClick={handleSchedule} variant="success" className="friendcard-btn">
            <i className="far fa-calendar-alt"></i>
          </Button>
        ) : (
          <Button onClick={handleSchedule} variant="danger" className="friendcard-btn">
            <i className="far fa-calendar-alt"></i>
          </Button>
        )}
        <Button variant="primary" className="friendcard-btn" onClick={openModal}>
          <i className="far fa-envelope"></i>
        </Button>
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal} ariaHideApp={false}>
          <Button variant="black" size="sm" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </Button>
          <div>Send a email</div>
          <form className="d-flex justify-content-center">
            <input />
            <Button onClick={handleSendMassage} size="sm">
              Send
            </Button>
          </form>
        </Modal>
      </div>
    </Card>
  );
}

export default FriendCard;
