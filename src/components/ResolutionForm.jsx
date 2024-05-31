import React from "react";
import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "../shared/Button";
import ResolutionContext from "../context/ResolutionContext";
function ResolutionForm() {
  const [nickname, setNickname] = useState("");
  const [currentStrength, setCurrentStrength] = useState("");
  const [goalStrength, setGoalStrength] = useState("");
  const [goal, setGoal] = useState("");
  const [themeYear, setThemeYear] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addResolution, resolutionEdit, updateResolution } =
    useContext(ResolutionContext);
  const handleNickNameChange = (e) => {
    if (nickname === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (nickname !== "" && nickname.trim().length < 2) {
      setMessage("Nickname must be at least 3 letters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setNickname(e.target.value);
  };

  const handleCurrentStrengthChange = (e) => {
    if (currentStrength === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setCurrentStrength(e.target.value);
  };

  const handleGoalStrengthChange = (e) => {
    if (goalStrength === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setGoalStrength(e.target.value);
  };
  const handleGoalChange = (e) => {
    if (goal === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setGoal(e.target.value);
  };

  const handleThemeYearChange = (e) => {
    if (themeYear === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setThemeYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname.trim().length > 2) {
      const newResolution = {
        nickname,
        currentStrength,
        goalStrength,
        goal,
        themeYear,
      };

      if (resolutionEdit.edit === true) {
        updateResolution(resolutionEdit.item.id, newResolution);
      } else {
        addResolution(newResolution);
      }

      setNickname("");
      setCurrentStrength("");
      setGoalStrength("");
      setGoal("");
      setThemeYear("");
    }
  };

  useEffect(() => {
    if (resolutionEdit.edit === true) {
      setBtnDisabled(false);
      setNickname(resolutionEdit.item.nickname);
      setCurrentStrength(resolutionEdit.item.currentStrength);
      setGoalStrength(resolutionEdit.item.goalStrength);
      setGoal(resolutionEdit.item.goal);
      setThemeYear(resolutionEdit.item.themeYear);
    }
  }, [resolutionEdit]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#8bdbe1",
          width: "100%",
          height: "35px",
        }}
      ></div>
      <Card>
        <form id="form" onSubmit={handleSubmit}>
          <h4>What`s your nickname?</h4>
          <input
            className="input"
            onChange={handleNickNameChange}
            type="text"
            placeholder="your nickname"
            value={nickname}
          />
          {message && <div className="message">{message}</div>}
          <div className="score">
            <h4 className="scoreQ1">What`s your current strength?</h4>
            <input
              className="input scoreI"
              onChange={handleCurrentStrengthChange}
              type="text"
              placeholder="num 1 - 10"
              value={currentStrength}
            />
            <h4 className="scoreQ2">What`s your goal strength?</h4>
            <input
              className="input scoreI"
              onChange={handleGoalStrengthChange}
              type="text"
              placeholder="num 1 - 10"
              value={goalStrength}
            />
          </div>
          <br />
          <h4>What`s your goal (in detail)?</h4>
          <input
            className="input"
            onChange={handleGoalChange}
            type="text"
            placeholder="My specific goal is..."
            value={goal}
          />
          <h4>How do you call the theme of your year?</h4>
          <input
            className="input"
            onChange={handleThemeYearChange}
            type="text"
            placeholder="This year will be me my..."
            value={themeYear}
          />
          <br />
          <br />
          <Button type="submit" isDisabled={btnDisabled} version="secondary">
            Submit
          </Button>
        </form>
      </Card>{" "}
    </>
  );
}

export default ResolutionForm;
