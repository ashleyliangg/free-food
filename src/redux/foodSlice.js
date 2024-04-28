import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import db from '../firebase/firebaseConfig';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const FOOD_COL = 'Food';

export const addFoodToFirestore = createAsyncThunk(
	'food/addFoodToFirestore',
	async (food) => {
		try {
			console.log(food);
			console.log(db);
			const addFoodRef = await addDoc(collection(db, FOOD_COL), food);
			console.log('hello');
			const newFood = { id: addFoodRef.id, food }
			return newFood;
		}
		catch (err) {
			console.error("write to DB failed. reason: ", err);
		}
	}
)

export const fetchFoods = createAsyncThunk(
	'food/fetchFoods',
	async () => {
		try {
			const querySnapshot = await getDocs(collection(db, FOOD_COL));
			const foods = querySnapshot.docs.map(doc => ({
				id: doc.id,
				food: doc.data(),
			}));
			return foods;
		}
		catch (err) {
			console.error("fetching from DB failed. reason: ", err);
		}
	}
)

export const deleteFood = createAsyncThunk(
	'food/deleteFood',
	async (id) => {
		try {
			const foods = await getDocs(collection(db, FOOD_COL));
			for (var snap of foods.docs) {
				if (snap.id === id) {
					await deleteDoc(doc(db, FOOD_COL, snap.id));
				}
			}
			return id;
		}
		catch (err) {
			console.error("deleting item from DB failed. reason: ", err);
		}
	}
)

export const updateFood = createAsyncThunk(
  'food/updateFood',
  async(updatedFood)=>{
    const foods = await getDocs(collection(db, FOOD_COL));
		console.log(updatedFood.id)
    for(var snap of foods.docs){
      if(snap.id === updatedFood.id){
        const foodRef = doc(db, FOOD_COL, snap.id);
        await updateDoc(foodRef, updatedFood.food);
      }
    }
    return updatedFood;
  }
);

const foodSlice = createSlice({
	name: 'Foods',
	initialState: {
		foodsArray: [],
	},
	reducers: {

	},
	extraReducers: (builder) => {
		builder
			.addCase(addFoodToFirestore.fulfilled, (state, action) => {
				state.foodsArray.push(action.payload);
			})
			.addCase(fetchFoods.fulfilled, (state, action) => {
				state.foodsArray = action.payload;
			})
			.addCase(deleteFood.fulfilled, (state, action) => {
				state.foodsArray = state.foodsArray.filter((food)=>food.id !== action.payload);
			})
			.addCase(updateFood.fulfilled,(state, action)=>{
				const {id, food} = action.payload;
				const index = state.foodsArray.findIndex((food)=>food.id === id);
				if (index !== -1) {
					state.foodsArray[index] = {id: id, food}
				}
			})
	}
});

export default foodSlice.reducer;