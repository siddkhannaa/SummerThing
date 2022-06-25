import { useState } from "react";
import React, { Component }  from 'react';
import './App.css'

const getInputValue = (event) => {
  const userValue = event.target.value;

  console.log(userValue);
};

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
      <div className = "boxes"> 
        <input className="rounded" type="text" placeholder="Person 1" onChange={getInputValue} />
        <button className="rounded" />
        <input className="rounded" type="text" placeholder="Person 2" onChange={getInputValue} />
      </div>
    </form>
  );
};


export default FooBarForm;
