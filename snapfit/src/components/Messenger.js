import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import StateContext from "../StateContext";
import MessengerFriend from "./MessengerFriend";
import Axios from "axios";
import "../styles/messenger.css";

function Messenger() {
  const appState = useContext(StateContext);
  const [messenger, setMessenger] = useState(false);
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const getMsg = async () => {
      const res = await Axios.get(`/api/friendlist/${appState.user.userID}`);
      if (res) {
        const resMsg = res.data.Message;
        setMsg(resMsg);
      }
    };
    getMsg();
  }, []);

  return (
    <div className="messenger px-1">
      <Button variant="light" onClick={() => setMessenger(!messenger)} size="lg">
        Messenger
      </Button>
      {messenger && (
        <div className="messenger-box shadow-lg">
          <div className="d-flex pl-4 pt-3">
            <h4 className="font-color-black ">Messenger</h4>
          </div>
          <div className="messenger-friendlist-box">
            {appState.friend === 0 ? (
              <div>None</div>
            ) : (
              <ul>
                {msg.map((eachfriend, index) => {
                  return (
                    <li key={index}>
                      <MessengerFriend data={eachfriend} setMessenger={setMessenger} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Messenger;
