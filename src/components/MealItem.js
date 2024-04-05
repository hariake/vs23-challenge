import { useContext } from 'react';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const MealItem = (props) => {
    const currencyFormat = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    const { addItem, cart } = useContext(CartContext);

    const addToCartHandler = () => {
 // If item doesn't exist, add it to the cart
            addItem({ ...props.meal, quantity: 1 });
    };

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{currencyFormat.format(props.meal.price)}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p className="meal-item-actions"> 
                    <Button onClick={addToCartHandler} textOnly={false} children={'Add to Cart'}/>
                </p>
            </article>
        </li>
    )
}

export default MealItem;
