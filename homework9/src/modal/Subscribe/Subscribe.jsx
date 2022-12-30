import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import { subscribeAction } from "../../resources/course/course.actions";

import { Input } from "../../components/Input";
import Button from "../../components/Button";

import artBrushImg from "../../assets/img/artBrush.png";

import "./subscribe.styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "1px solid rgb(244, 244, 244)",
    padding: "0px",
    overflow: "hidden",
  },
};

const Subscribe = ({ modalIsOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="content">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="subscribe">
          <div className="subscribe-box">
            <div className="subscribe-close" onClick={() => closeModal()}>
              <p>&times;</p>
            </div>
            <h4>Give us your email to stay tuned!</h4>
            <div className="subscribe-form">
              <Input
                placeholder="E-mail"
                value={email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />
              <Button
                title="Subscribe"
                classes="content--two__right--btn"
                type="button"
                disabled={!validateEmail(email)}
                onClick={async () => {
                  const result = await dispatch(
                    subscribeAction({ email: email })
                  );
                  if (result.type === "success") {
                    navigate("apply", { state: { subscribeSuccess: true } });
                  } else {
                  }
                }}
              />
            </div>
            <div className="subscribe-bottom" onClick={closeModal}>
              <p>You always can undo that in any of your received emails</p>
            </div>
          </div>

          <div className="subscribe-image">
            <img src={artBrushImg} alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Subscribe;
