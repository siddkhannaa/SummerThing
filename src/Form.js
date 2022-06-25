import { useState } from "react";
import React  from 'react';
import './App.css'

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
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };


  return (
    <form>
      <div className = "boxes"> 
        <input className="rounded" name="name1" type="text" placeholder="Person 1" onChange={handleChange} />
        <button className="rounded" onClick={handleSubmit} />
        <input className="rounded" name="name2" type="text" placeholder="Person 2" onChange={handleChange} />
      </div>
    </form>
  );
};


export default FooBarForm;
