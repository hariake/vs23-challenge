import React, { useState, useEffect } from 'react';
import MealItem from './MealItem';
import '../index.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch meals');
                }
                const mealsData = await response.json();
                setMeals(mealsData);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {meals.map(meal => (
                <li className="meal-item" key={meal.id}>
                    <MealItem meal={meal} />
                </li>
            ))}
        </ul>
    );
};

export default Meals;
