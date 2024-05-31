import { createContext, useState } from "react";

const ResolutionContext = createContext();

export const ResolutionProvider = ({ children }) => {
  const [resolution, setResolution] = useState([
    {
      id: 1,
      nickname: "Leo",
      currentStrength: 2,
      goalStrength: 9,
      goal: "I want to bike in 2 months through the alps.",
      themeYear: "I want to be a shining biker!!!",
    },
    {
      id: 2,
      nickname: "Sue",
      currentStrength: 3,
      goalStrength: 10,
      goal: "I want to win the local dancing championships in September.",
      themeYear: "I want to become a royal dancer !!!.",
    },
    {
      id: 3,
      nickname: "Andy",
      currentStrength: 4,
      goalStrength: 9,
      goal: "I want to win the next four soccer matches with my team.",
      themeYear: "I want to become a star soccer player!!!",
    },
  ]);
  const [resolutionEdit, setResolutionEdit] = useState({
    item: {},
    edit: false,
  });
  //delete resolution
  const deleteResolution = (id) => {
    if (window.confirm("Do you really want to delete your resolution?")) {
      setResolution(resolution.filter((item) => item.id !== id));
    }
  };

  //add resolution
  const addResolution = (newResolution) => {
    newResolution.id = resolution.length + 1;
    setResolution([newResolution, ...resolution]);
  };

  //edit resolution item
  const editResolution = (item) => {
    setResolutionEdit({
      item,
      edit: true,
    });
  };

  // update resolution item
  const updateResolution = (id, updItem) => {
    setResolution(
      resolution.map((item) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
  };
  return (
    <ResolutionContext.Provider
      value={{
        resolution,
        deleteResolution,
        addResolution,
        editResolution,
        resolutionEdit,
        updateResolution,
      }}
    >
      {children}
    </ResolutionContext.Provider>
  );
};
export default ResolutionContext;
