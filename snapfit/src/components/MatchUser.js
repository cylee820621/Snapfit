import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../styles/matchuser.css";
import FriendCard from "./FriendCard";

function MatchUser(props) {
  const style = props.styleData;
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    setMatchData(props.data);
  }, [props.data]);

  return (
    <div className={style}>
      <Button variant="light" className="matched-close-btn" onClick={() => props.setMatch(false)}>
        x
      </Button>
      <div className="d-flex justify-content-center mb-4 matched-wd">
        <h3>Matched!</h3>
      </div>
      <div className="overflow-auto">
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="justify-content-around">
          {matchData.map((matchedUser, index) => {
            return (
              <Col key={index}>
                <div className="d-flex justify-content-center align-items-center m-3 ">
                  <FriendCard index={index} data={matchedUser} />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default MatchUser;
