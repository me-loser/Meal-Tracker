import React, { useState } from "react";
import { BackButton } from "../ui/BackButton";
import { Dropdown } from "../ui/Dropdown";
import { useNavigate } from "react-router-dom";

const unitOptions = ["pounds", "cups", "tablespoons", "teaspoons", "count"];

const AddIngredientsPage = () => {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [units, setUnits] = useState(unitOptions[0]);
  const navigate = useNavigate();

  const addToIngredients = async () => {
    const newIngredient = {
      name: name.toLowerCase(),
      amount,
      units,
    };
    await fetch("http://localhost:8080/ingredients", {
      method: "POST",
      body: JSON.stringify(newIngredient),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };
  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Add Ingredient</h1>
        <input
          type="text"
          placeholder="Enter Ingredient Name here"
          className="space-after space-before full-width"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="space-before full-width"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Dropdown
          className="space-before full-width"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          options={unitOptions}
        />
        <button className="space-before full-width" onClick={addToIngredients}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddIngredientsPage;
