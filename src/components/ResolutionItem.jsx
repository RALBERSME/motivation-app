import React from "react";
// import { useState } from "react";
import Card from "../shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import ResolutionContext from "../context/ResolutionContext";
function ResolutionItem({ item }) {
  const { deleteResolution, editResolution } = useContext(ResolutionContext);
  // const [nickName, setNickname] = useState("nickName");

  return (
    <Card>
      <div className="nickName">
        Your nickname:<em className="answer"> {item.nickname}</em>{" "}
      </div>
      <div className="currentStrength">
        Your current strength:{" "}
        <em className="answer"> {item.currentStrength}</em>
      </div>
      <div className="goalStrength">
        Your goal strength: <em className="answer"> {item.goalStrength}</em>
      </div>
      <div className="goal">
        Your goal (detail): <em className="answer"> {item.goal}</em>
      </div>
      <div className="myTheme">
        Your theme of the Year: <br />
        <em className="answer"> {item.themeYear}</em>
      </div>
      <button
        onClick={() => deleteResolution(item.id)}
        id="closeBtn"
        className="close"
      >
        Delete
        <FaTimes color="white" />
      </button>{" "}
      <button className="edit" onClick={() => editResolution(item)}>
        Edit
        <FaEdit color="black" />
      </button>
    </Card>
  );
}

ResolutionItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ResolutionItem;
