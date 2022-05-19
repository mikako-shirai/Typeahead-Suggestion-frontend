import React from "react";

const Suggestions = ({ suggestions, setShowSuggestions, setForm }) => {

  const handleClick = async (suggestion) => {
    setForm(suggestion);
    setShowSuggestions(false);
    // frequency
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
