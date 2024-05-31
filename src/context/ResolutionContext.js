import { createContext, useState, useEffect } from "react";

const ResolutionContext = createContext();

export const ResolutionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resolution, setResolution] = useState([
    // {
    //   id: 1,
    //   nickname: "Leo",
    //   currentStrength: 2,
    //   goalStrength: 9,
    //   goal: "I want to bike in 2 months through the alps.",
    //   themeYear: "I want to be a shining biker!!!",
    // },
    // {
    //   id: 2,
    //   nickname: "Sue",
    //   currentStrength: 3,
    //   goalStrength: 10,
    //   goal: "I want to win the local dancing championships in September.",
    //   themeYear: "I want to become a royal dancer !!!.",
    // },
    // {
    //   id: 3,
    //   nickname: "Andy",
    //   currentStrength: 4,
    //   goalStrength: 9,
    //   goal: "I want to win the next four soccer matches with my team.",
    //   themeYear: "I want to become a star soccer player!!!",
    // },
  ]);
  const [resolutionEdit, setResolutionEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchResolution();
  }, []);

  //fetch resolution
  const fetchResolution = async () => {
    const response = await fetch(`/resolution?_sort=id&_order=desc`);
    const data = await response.json();

    setResolution(data);
    setIsLoading(false);
  };
  //delete resolution
  const deleteResolution = async (id) => {
    if (window.confirm("Do you really want to delete your resolution?")) {
      await fetch(`/resolution/${id}`, { method: "DELETE" });
      setResolution(resolution.filter((item) => item.id !== id));
    }
  };

  //add resolution
  const addResolution = async (newResolution) => {
    const response = await fetch("/resolution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newResolution),
    });

    const data = await response.json();
    setResolution([data, ...resolution]);
  };

  //edit resolution item
  const editResolution = (item) => {
    setResolutionEdit({
      item,
      edit: true,
    });
  };

  // update resolution item
  const updateResolution = async (id, updItem) => {
    const response = await fetch(`/resolution/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setResolution(
      resolution.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <ResolutionContext.Provider
      value={{
        resolution,
        resolutionEdit,
        isLoading,
        deleteResolution,
        addResolution,
        editResolution,
        updateResolution,
      }}
    >
      {children}
    </ResolutionContext.Provider>
  );
};
export default ResolutionContext;
