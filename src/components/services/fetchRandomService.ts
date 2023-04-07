import axios from "axios";
import {API_KEY} from "../assets/API_KEY";
import {IRandomRecipes} from "../models/IRandomRecipes";


export const fetchRandomService = async () => {
    const response = await axios.get<IRandomRecipes>(`https://api.spoonacular.com/recipes/random?number=10&${API_KEY}`)
    return response.data.recipes
}