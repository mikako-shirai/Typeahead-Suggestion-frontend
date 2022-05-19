import React, { useEffect, useState } from "react";
import axios from "axios";

import Suggestions from "./Suggestions.jsx";

const Form = () => {
  const production = false;
  const URL = !production ? "http://localhost:8080" : "https://typeahead-suggestion-be.an.r.appspot.com";

  const [form, setForm] = useState("");
  const [chosen, setChosen] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = async (event) => {
    event.preventDefault();
    setForm(event.target.value);
    await showWords();
    setShowSuggestions(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewWord();
    setForm("");
  };

  const handleOverlay = () => {
    setShowSuggestions(false);
    setChosen("");
  };

  const formatInput = () => {
    const currentStr = form.toLowerCase();
    let str = currentStr.replace(/(^\s+)|(\s+$)|([^a-z])/g, "");
    const strs = str.split(" ");
    return strs[0];
  };

  const getAllWords = async () => {
    const res = await axios.get(`${URL}/all`);
    const words = res.data;
    setSuggestions(words);
  };

  const showWords = async () => {
    const prefix = formatInput();
    const res = await axios.get(`${URL}/search?prefix=${prefix}`);
    const words = res.data;
    setSuggestions(words);
  };

  const addNewWord = async() => {
    const word = formatInput();
    if (!word)  return;

    await axios.post(`${URL}/insert`, word);
    setChosen(word);
  };

  useEffect(() => {
    getAllWords();
    console.log(`server running on ${URL}`);
  }, []);

  useEffect(() => {
    showWords();
  }, [form]);

  return (
    <div className="form-bg">
      <div className="form-wrapper"></div>
      <div className="form-wrapper">
        {showSuggestions && 
        <Suggestions
          suggestions={suggestions}
          setForm={setForm}
          setChosen={setChosen}
        />}
      </div>
      <div onClick={handleOverlay} className="overlay"></div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-title">English Words List</div>
          <input
            onClick={handleChange}
            onChange={handleChange}
            type="text"
            value={form}
            placeholder="Search..."
            required
          />
          <button type="submit">Add New Word</button>
        </form>
      </div>
      <div className="form-wrapper">
        <div className="chosen">{chosen}</div>
      </div>
      <div className="form-wrapper"></div>
    </div>
  );
};

export default Form;
