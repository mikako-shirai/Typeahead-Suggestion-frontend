import React from "react";
import axios from "axios";

const Suggestions = ({ suggestions, setShowSuggestions, setForm }) => {

  const handleClick = async (suggestion) => {
    // await addNewWord(suggestion);
    setForm("");
    setShowSuggestions(false);
    // frequency
  };

  const addNewWord = async(suggestion) => {
    await axios.post("http://localhost:8090/add", suggestion);
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
