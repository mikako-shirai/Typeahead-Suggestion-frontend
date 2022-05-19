import React, { useEffect, useState } from "react";
import axios from "axios";

import Suggestions from "./Suggestions.jsx";

const Form = () => {
  const [form, setForm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = async (event) => {
    setForm(event.target.value);
    setShowSuggestions(true);
    await showWords();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewWord();
    setForm("");
    setShowSuggestions(false);
  };

  const newInput = () => {
    const currentStr = form;
    return formatInput(currentStr);
  };

  const formatInput = (input) => {
    let str = input.replace(/(^\s+)|(\s+$)/g, "");
    const strs = str.split(" ");

    return strs[0];

    // spaces
    // let output = "";
    // let add = false;

    // for (const char of strs) {
    //   if (add) output += " ";
    //   if (char) output += char.toLowerCase();
    //   add = char ? true : false;
    // }

    // return output;
  };

  const getAllWords = async () => {
    const res = await axios.get("http://localhost:8090/all");
    const words = res.data;
    setSuggestions(words);
  };

  const showWords = async () => {
    const prefix = newInput();
    const res = await axios.get(`http://localhost:8090/search?prefix=${prefix}`);
    const words = res.data;
    setSuggestions(words);
  };

  const addNewWord = async() => {
    const word = newInput();
    if (!word)  return;

    await axios.get(`http://localhost:8090/add?word=${word}`);
  };

  useEffect(() => {
    getAllWords();
  }, []);

  useEffect(() => {
    showWords();
  }, [form]);

  return (
    <div className="form-bg">
      <div onClick={() => { setShowSuggestions(false) }} className="overlay"></div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-title">Search Words</div>
          <input
            onClick={handleChange}
            onChange={handleChange}
            type="text"
            value={form}
            placeholder="Search..."
            required
          />
          {showSuggestions && 
          <Suggestions
            suggestions={suggestions}
            setShowSuggestions={setShowSuggestions}
            setForm={setForm}
          />}
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
