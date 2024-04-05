import React from 'react';
import Button from './UI/Button';

const MealItem = (props) => {
    // Your existing code...

    const handleAddToCart = () => {
        props.addToCart(props.meal); // Call addToCart function received as a prop
    };

    return (
        <li className="meal-item">
            <article>
                {/* Your existing code */}
                <p>
                    <Button textOnly={false} onClick={handleAddToCart}>
                        Add Meal
                    </Button>
                </p>
            </article>
        </li>
    );
};

export default MealItem;
