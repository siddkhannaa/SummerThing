import { useState } from "react";
import React, { Component }  from 'react';
import './App.css'


const initialFormData = Object.freeze({
  name: "",
});

const FooBarForm = () => {
  const [name, setName1] = useState(initialFormData);

  const handleChange = (e) => {
    setName1(e.target.value);
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
      <input className = "input" id = "name1" name="Name1" onChange={handleChange} />
      <button className="btn-group" onClick={handleSubmit}><img src={"../heart.png"} /></button>
    </form>
  );
};


export default FooBarForm;
