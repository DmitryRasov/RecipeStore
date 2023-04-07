export interface IRandomRecipes {
    recipes: [
        {
            aggregateLikes: number;
            analyzedInstructions: any[];
            cheap: false
            cookingMinutes: number;
            creditsText: string;
            cuisines: any[];
            dairyFree: boolean;
            diets: any[];
            dishTypes: any[];
            extendedIngredients: any[];
            gaps: string;
            glutenFree: boolean;
            healthScore: number;
            id: number;
            image: string;
            imageType: string;
            instructions: string;
            license: string;
            lowFodmap: boolean
            occasions: any[]
            originalId: any;
            preparationMinutes: number;
            pricePerServing: number;
            readyInMinutes: number;
            servings: number;
            sourceName: string;
            sourceUrl: string;
            spoonacularSourceUrl: string;
            summary: any;
            sustainable: boolean;
            title: string;
            vegan: boolean;
            vegetarian: boolean;
            veryHealthy: boolean;
            veryPopular: boolean;
            weightWatcherSmartPoints: number;
        }
    ]
}