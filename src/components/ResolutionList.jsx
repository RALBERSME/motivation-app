import React from "react";
import ResolutionItem from "./ResolutionItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import ResolutionContext from "../context/ResolutionContext";

function ResolutionList() {
  const { resolution } = useContext(ResolutionContext);
  if (!resolution || resolution.length === 0) {
    return <p>Please enter resolution and submit.</p>;
  }
  return (
    <div className="resolution-list">
      {resolution.map((item) => {
        return <ResolutionItem key={item.id} item={item} />;
      })}
    </div>
  );
}

ResolutionItem.propTypes = {
  resolution: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
      currentStrength: PropTypes.number.isRequired,
      goalStrength: PropTypes.number.isRequired,
      goal: PropTypes.string.isRequired,
      themeYear: PropTypes.string.isRequired,
    })
  ),
};

export default ResolutionList;
