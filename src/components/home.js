import React, { useState, useEffect } from "react";
import Card from '../utils/card.js';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from "../redux/foodSlice.js";
import {
	Fade,
	Modal,
	Backdrop,
	Box,
} from '@mui/material';

const Home = () => {
	const foods = useSelector((state) => state.foods.foodsArray);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [claimedItem, setClaimedItem] = useState(null);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		dispatch(fetchFoods());
	}, [dispatch])


	const ModalElement = () => {

		const style = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			bgcolor: '#fff9e6',
			border: '2px solid #fff9e6',
			boxShadow: 24,
			borderRadius: 2,
			p: 4,
		}
		return (
			<Modal
				aria-label="transition-modal"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						{claimedItem} claimed!
					</Box>
				</Fade>
			</Modal>
		)
	}

	return (
		<div>
			<div id="banner">
				<div id="banner-content">
					FREEFOOD@NOW
				</div>
			</div>

			<div id="main-content">
				<div className="block1">
					<div id="header">
						Have Free Food Around You?
					</div>
					<div id="main">
						Maybe you do, maybe you don't.
					</div>
					<NavLink to="/free-food/submission" activestyle="true">
						<div id="fourth" className="myButton">
							Share Free Food Info Here
						</div>
					</NavLink>

				</div>
				<div className="tiles">
					{foods.length > 0 ? (
						<>
							{foods.map((el) => (
								<Card id={el.id} food={el.food} handleOpen={handleOpen} setClaimedItem={setClaimedItem} />
							))
							}
						</>
					) : (
						<div>No Foods Yet!</div>
					)}
				</div>
			</div>
			{ModalElement()}
		</div>

	);
};

export default Home;