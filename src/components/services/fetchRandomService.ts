import axios from "axios";
// @ts-ignore
import {API_KEY} from "../assets/API_KEY.ts";
import {IRandomRecipes} from "../models/IRandomRecipes";


export const fetchRandomService = async () => {
    const response = await axios.get<IRandomRecipes>(`https://api.spoonacular.com/recipes/random?number=10&${API_KEY}`)
    return response.data.recipes
}