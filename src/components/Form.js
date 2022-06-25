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

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${values.name1}&sname=${values.name2}`,
      options)
      .then(response => response.json())
      .then(response => Results(response.result))
      .catch(err => console.error(err));
  };


  return (
    <form>
      <div className = "boxes"> 
        <input className="rounded" name="name1" type="text" placeholder="Your Name" onChange={handleChange} />
        <button className="rounded" onClick={handleSubmit}><img className = "heart" src={heart} alt="heart"></img></button>
        <input className="rounded" name="name1" type="text" placeholder="Their Name" onChange={handleChange} />
      </div>
    </form>
  );
};


export default FooBarForm;
