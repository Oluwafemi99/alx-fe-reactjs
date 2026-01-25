import { useState } from 'react'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
	return (
		<Router>
			<Routes>
				{/* Home route shows all recipes */}
				<Route
					path="/"
					element={<RecipeList />}
				/>

				{/* Add new recipe */}
				<Route
					path="/add"
					element={<AddRecipeForm />}
				/>

				{/* Recipe details by ID */}
				<Route
					path="/recipes/:id"
					element={<RecipeDetails />}
				/>

				{/* Optional: Edit recipe by ID */}
				<Route
					path="/recipes/:id/edit"
					element={<EditRecipeForm />}
				/>
			</Routes>
		</Router>
	);
}

export default App
