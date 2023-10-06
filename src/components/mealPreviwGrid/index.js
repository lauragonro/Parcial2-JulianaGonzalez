import React from "react";
import { useState, useEffect } from "react";

import "./index.css";
import { FetchMealByFirstLetter } from "../../services/mealtService";
import { Link } from "react-router-dom";

const MealPreviwGrid = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    FetchMealByFirstLetter("b").then((data) => setMeals(data));
  }, []);

  const listMeals = meals.map((meal) => (
    <div key={meal.idMeal}>
      <>
        <img
          src={meal.strMealThumb}
          alt={meal.strCategory}
          width="90px"
          height="120px"
        />
        <button>
          <Link to={`meal/${meal.idMeal}`}>See details</Link>
        </button>
      </>
    </div>
  ));
  return <div className="meal-grid">{listMeals}</div>;
};

export default MealPreviwGrid;
