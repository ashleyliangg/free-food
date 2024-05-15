import React from 'react';
import "../App.css";
import { GoLocation } from 'react-icons/go';
import { FiCoffee } from 'react-icons/fi';
import { AiOutlineTag } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteFood, updateFood } from '../redux/foodSlice';

const Card = (props) => {
	const { name, location, servings, tags } = props.food;
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteFood(id));
	}

	const handleClaimed = (food) => {
		const updatedFood = { ...food, servings: (parseInt(food.servings) - 1).toString() };
		dispatch(updateFood({ id: props.id, food: updatedFood }));
	}

	if (servings === "0") {
		handleDelete(props.id);
	}
	return (
		<div className="cardbox">
				<p className='cardheader' style={{alignSelf: 'center'}}><b>{name}</b></p>
				<p><GoLocation style={{ marginRight: '5px' }} />{location}</p>
				<p><FiCoffee style={{ marginRight: '5px' }} />{servings} servings left</p>
				<p><AiOutlineTag style={{ marginRight: '5px' }} />
				{
					tags.length > 0 ? tags.map((tag, i) => (<span key={i} className='tag'>{tag}</span>)) : ""
				}
				</p>
			<div className='flexContainer'>
				<div className="actionButton"
					onClick={() => {
						props.setClaimedItem(props.food.name);
						handleClaimed(props.food);
						props.handleOpen();
					}}
				>
					Claim me
				</div>
				<div className="actionButton"
					onClick={() => handleDelete(props.id)}
				>
					All finished ˙◠˙
				</div>
			</div>

		</div>
	);
}

export default Card;