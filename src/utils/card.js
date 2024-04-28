import React from 'react';
import "../App.css";
import {GoLocation} from 'react-icons/go';
import {FiCoffee} from 'react-icons/fi';
import {AiOutlineTag} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteFood, updateFood } from '../redux/foodSlice';

const Card = (props) => {
		const {name, location, servings, tags} = props.food;
		const dispatch = useDispatch();

		const handleDelete = (id) => {
			dispatch(deleteFood(id));
		}

		const handleClaimed = (food) => {
			const updatedFood = {...food, servings: (parseInt(food.servings) - 1).toString()};
			dispatch(updateFood({id: props.id, food: updatedFood}));
		}

		if (servings === "0") {
			handleDelete(props.id);
		}
    return (
        <div className="cardbox">
            <div className="innerbox">
                <p className='cardheader'>{name}</p>
                <p><GoLocation style={{marginRight: '5px'}}/>{location}</p>
                <p><FiCoffee style={{marginRight: '5px'}}/>{servings}</p>
                <p><AiOutlineTag style={{marginRight: '5px'}}/>{tags}</p>
            </div>
            <button
                onClick={() => {
										handleClaimed(props.food);
                    alert('Item claimed!');
                }}
            >
            Claim me
            </button>
						<button
                onClick={() => handleDelete(props.id)}
            >
            All finished ˙◠˙
            </button>
        </div>
    );
}

export default Card;