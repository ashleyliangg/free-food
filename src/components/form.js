import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFoodToFirestore } from "../redux/foodSlice";

const Form = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Forms with formik
	const formik = useFormik({
		initialValues: {
			name: "",
			location: "",
			servings: "",
			tags: ""
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Name of food is required"),
			location: Yup.string()
				.required("Location is required"),
		}),
		onSubmit: (values) => {
			dispatch(addFoodToFirestore(values));
			navigate("/free-food/success");
		}
	});
	return (
		<div>
			<div id="banner">
				<div id="banner-content">
					FREEFOOD@NOW
				</div>
			</div>
			<div id="main-content" style={{ marginTop: '100px' }}>
				<NavLink to="/free-food" activestyle="true">
					<div id="fourth" className="myButton">
						Back to Free Food
					</div>
				</NavLink>

				<div style={{ backgroundColor: '#CBF9E0', width: '50vw', margin: 'auto', paddingTop: '1rem', paddingBottom: '1rem', borderRadius: '15px' }}>
					<form onSubmit={formik.handleSubmit}>
						<div>
							<p>Name of Food</p>
							<input
								id="name"
								type="text"
								placeholder="Food Title"
								name="name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
							/>
							{formik.touched.name && formik.errors.name ? <p className="error">{formik.errors.name}</p> : null}
						</div>

						<div>
							<p>Location of Free Food</p>
							<input
								id="location"
								type="text"
								placeholder="Location"
								name="location"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.location}
							/>
							{formik.touched.location && formik.errors.location ? <p className="error">{formik.errors.location}</p> : null}
						</div>

						<div>
							<p>Amount of Servings Available</p>
							<input
								id="servings"
								type="number"
								placeholder="Serving Size (eg 10)"
								name="servings"
								onChange={formik.handleChange}
								value={formik.values.servings}
							/>
						</div>

						<div>
							<p>Any Labels/Allergens? Vegan, GF, Peanuts</p>
							<input
								id="tags"
								type="text"
								placeholder="Tags (eg Vegan, GF)"
								name="tags"
								onChange={formik.handleChange}
								value={formik.values.tags}
							/>
						</div>
						<button className="submitButton" style={{ marginTop: "10px" }} type="submit" >Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
};


export default Form;

// myArray = []

// module.exports = {
//     Form,
//     myArray
// }