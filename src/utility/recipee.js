export class Recipee{
    async getRecipee(food){
        //validate the entry or data
        if(!food) throw new Error('Please Enter the food');
        const food=food.trim(); //trim white spaces

        const responseData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        
        //if response is not ok throw an error
        if(!responseData.ok) throw new Error('Result not found');

        const data=await responseData.json();

        //check if result or meals is available
        if(data.meals.length==0) throw new Error('No recipees');

        return data.meals;
    }
}