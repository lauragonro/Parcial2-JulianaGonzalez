import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { FetchMealById } from "../../services/mealtService";

const MealPreviw = () => {
  const [meal, setMeal] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchMealById(id).then((data) => setMeal(data));
  }, []);

  return (
    <div className="meal-previw">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealPreviw;
