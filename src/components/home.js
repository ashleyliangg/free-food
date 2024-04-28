import React, { useEffect } from "react";
import Card from '../utils/card.js';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from "../redux/foodSlice.js";

const Home = () => {
	const foods = useSelector((state) => state.foods.foodsArray);
	console.log(foods);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchFoods());
	}, [dispatch])

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
								<Card id={el.id} food={el.food} />
							))
							}
						</>
					) : (
						<div>No Foods Yet!</div>
					)}
				</div>
			</div>
		</div>

	);
};

export default Home;
// export default connect(mapStateToProps, { adddata })(Home);