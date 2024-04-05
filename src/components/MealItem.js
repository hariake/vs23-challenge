import React from 'react';

const MealItem = (props) => {
    // Format price as Euro currency with the currency symbol displayed after the value
    const formattedPrice = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol' // Use 'symbol' display to place the symbol after the value
    }).format(props.meal.price);

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formattedPrice}</p> {/* Display formatted price */}
                    <p>{props.meal.description}</p>
                </div>
                <p>
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default MealItem;
