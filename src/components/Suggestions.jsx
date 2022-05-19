import React from "react";

const Suggestions = ({ suggestions, setForm, setChosen }) => {

  const handleClick = async (suggestion) => {
    setForm(suggestion);
    setChosen(suggestion);
  };

  return (
    <div className="suggestions">
      {suggestions.map((suggestion, index) => {
        return (
          <div onClick={() => { handleClick(suggestion) }} key={index} className="suggestion">
            {suggestion}
          </div>
        )
      })}
    </div>
  );
};

export default Suggestions;
