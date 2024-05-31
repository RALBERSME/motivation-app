import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header-container">
        <h1>Reinhild`s Motivation App</h1>
        <ol className="header-ol">
          <li>Have a plan</li>
          <li> Decide wisely - not too many resolutions</li>
          <li> What is the thing I am constantly dreaming about?</li>
          <li>
            Write your resolution down, right here on this page. It`s a contract
            you make with yourself.
          </li>
          <li>
            Choose a nickname. You don`t have to tell others about your
            resolution if you fear that those people will not support you. If
            you have a friend or mentor who wants to support you, let him know
            your plan.
          </li>
          <li>
            It takes about 21 days to build up the necessary habit. Then it
            becomes easier to stay with your resolution.{" "}
          </li>
          <li>
            Make everything more visual by giving your goal a theme name:
            <br />
            <em>"This year will be my year of ....."</em>"
          </li>
          <li>
            <Link to="/next" className="link">
              Do you want a more info? Click here.
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Header;
