import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
import "../App.css";
function NextPage() {
  return (
    <Card>
      <div className="nextPage">
        <ul>
          {" "}
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=xIDsgi9ytFE");
              return false;
            }}
          >
            Do you want a video clip on resolutions first? Click here.
          </li>
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=1-SvuFIQjK8");
              return false;
            }}
          >
            <u>SMART - define your goal:</u>
            <br />
            <br />
            <p>S - specific</p>
            <p>M - measurable</p>
            <p>A - actionable</p>
            <p>R - relevant</p>
            <p>T - time bound</p>
            <br />
            <br />
            Click here for a video clip on SMART
          </li>
          <br />
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=EpOMk1jOzgk");
              return false;
            }}
          >
            Click here for thoughts on how to plan your day.
          </li>
          <br />
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=xp0O2vi8DX4");
              return false;
            }}
          >
            Click here for{" "}
            <em>
              "How to motivate yourself to change your behavior -T.Sharot"
            </em>
          </li>
          <br />
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=v62iygMe1qY");
              return false;
            }}
          >
            Click here for{" "}
            <em>
              "If This Doesn't Motivate You, Nothing Will - Oprah Winfrey "
            </em>
          </li>
          <br />
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=7sxpKhIbr0E");
              return false;
            }}
          >
            Click here for{" "}
            <em>"The psychology of self-motivation | Scott Geller "</em>
          </li>{" "}
          <br />
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=II5h6uJPvvs");
              return false;
            }}
          >
            Click here for{" "}
            <em>"How to get motivated even when you don’t feel like it "</em>
          </li>
          <br />
          <br />
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=i1fXAmApPrA");
              return false;
            }}
          >
            Click here for{" "}
            <em>"NEUROSCIENTIST - You Will NEVER Lose Motivation AGAIN! "</em>
          </li>
          <br />
          <br />
        </ul>
        <p>
          <Link to="/">Back to main page.</Link>
        </p>
      </div>
    </Card>
  );
}

export default NextPage;
