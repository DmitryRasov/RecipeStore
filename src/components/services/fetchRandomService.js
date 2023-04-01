import axios from "axios";
import {API_KEY} from "../assets/API_KEY";

export const fetchRandoService = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&${API_KEY}`)
    return response.data.recipes
}