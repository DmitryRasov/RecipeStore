import axios from "axios";

const fetchData = async () => {
    const response = await axios.get('https://api.spoonacular.com/recipes/random?number=10&apiKey=cd8650105a1d42aa858bb337334c6668')
    setRecipes(response.data.recipes)
    console.log(response.data.recipes)
}
fetchData()