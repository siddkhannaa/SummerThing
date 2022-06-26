import { useState } from "react";
import React  from 'react';
import '../App.css'
import heart from '../images/heart2.jpg'
import Results from "./result";

const initialFormData = Object.freeze({
  name1: "",
  name2: "",
});

const FooBarForm = () => {
  const [values, setValues] = useState(initialFormData);
  const [submitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState("");

  const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`https://eofnkl2ivusj18a.m.pipedream.net?fname=${values.name1}&sname=${values.name2}`);

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${values.name1}&sname=${values.name2}`,
      options)
      .then(response => response.json())
      .then(response => {
        setResults(response);
        console.log(response.result);
        setIsSubmitted(true);
      })
      .catch(err => console.error(err));

  };

  const unsubmit = async (e) => {
    setIsSubmitted(false);
  }

  console.log(unsubmit);

  if (submitted) return <Results results={results} unsubmit={unsubmit} />

  return (
    <form>
      <div className = "boxes"> 
        <input className="rounded" name="name1" type="text" placeholder="Your Name" onChange={handleChange} />
        <button className="rounded" onClick={handleSubmit}><img className = "heart" src={heart} alt="heart"></img></button>
        <input className="rounded" name="name2" type="text" placeholder="Their Name" onChange={handleChange} />
      </div>
    </form>
  );
};


export default FooBarForm;
