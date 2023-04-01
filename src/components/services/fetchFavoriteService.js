import axios from "axios";
import {API_KEY} from "../assets/API_KEY";

export const fetchFavoriteService = async () => {
    const recipes = []
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let id = localStorage.getItem(key)
            const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?${API_KEY}`)
            recipes.push(recipe.data)
        }
    }
    return recipes
}