import { Recipee } from "./utility/recipee";
import { useState } from "react";



const recipeeFinder=new Recipee(); //initialize recipee class

function SearchBar({recipee,handleInput,fetchRecipee}){
  return <div className="flex justify-around m-4 px-2 gap-2">
    <input value={recipee} className="w-64 flex-1 border-2 rounded-3xl shadow-lg" type="text" placeholder="Type to search the recipee" onChange={e=>{handleInput(e)}}/> 
    <button className="border-2 rounded-full shadow-2xl px-1" onClick={fetchRecipee}>Search</button>
    </div>;
}

function Result({result}){
  
  const list=result.map((val,index)=> {
const {strMeal,strCategory,strArea,strMealThumb}=val;
return <ResultCard strMeal={strMeal} strCategory={strCategory} strArea={strArea} strMealThumb={strMealThumb} key={index}/>
});
 return  <div className="grid grid-cols-4 gap-2 m-4">
  {list}
  </div>;
}

function RecipeeCard(){


  return(
    <div>
      <img src={`${data.thumb}`} alt="An image of a food" />
      <p className="text-3xl text-center">{data.meal}</p>
      <p className="text-2xl text-center">{data.category}</p>
      <p className="text-2xl text-center">{data.area}</p>
    </div>
  );
}


function App() {
 const [result, setResult]=useState([]); 
 const [recipee, setRecipee]=useState('');

 async function fetchRecipee(){
  try{
    const data= await recipeeFinder();
    setResult(data);
  }
  catch(error){
    console.log(error.message);
  }
 }

 function handleInput(e){
  let text=e.target.value.trim();
  setRecipee(text);
 }


  return (
    <div className="m-4">
    <div className="flex items-center justify-center "><SearchBar recipee={recipee} fetchRecipee={fetchRecipee} handleInput={handleInput}/></div>
    
 <Result result={result}/>

    </div>
  )
}

export default App
