import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const [password, setPassword] = useState("");

  const inputChange = (event) => {
    setPassword(event.target.value);
  };

  const loginChange = () => {
    if (password === "Kyrgyzstan2024") {
      setModal(true);
    } else {
      alert("Неправильный пароль");
    }
  };

  return (
    <div id="modal">
      <div className="modal">
        <h1>Enter the password</h1>
        <input type="password" value={password} onChange={inputChange} />
        {modal === true ? (
          <Link to={"/admin"}>
            <button onClick={loginChange}>open</button>
          </Link>
        ) : (
          <button onClick={loginChange}>open</button>
        )}
      </div>
    </div>
  );
};

export default Modal;
