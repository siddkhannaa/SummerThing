import { useState } from "react";
import React  from 'react';
import './App.css'

const initialFormData = Object.freeze({
  name1: "",
  name2: "",
});

const FooBarForm = () => {
  const [values, setValues] = useState(initialFormData);

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // api route 

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form>
      <div className = "boxes"> 
        <input className="rounded" name="name1" type="text" placeholder="Person 1" onChange={handleChange} />
        <button className="rounded" onClick={handleSubmit} />
        <input className="rounded" name="name1" type="text" placeholder="Person 2" onChange={handleChange} />
      </div>
    </form>
  );
};


export default FooBarForm;
