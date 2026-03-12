import { Recipee } from "./utility/recipee";
import { useState } from "react";

// const data={
//   id:"53004",
//   meal:"Dal Makhani",
//   category:"vegeterian",
//   area:"Indian",
//   thumb:"https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg"
// }

const recipeeFinder=new Recipee(); //initialize recipee class

function SearchBar(){
  return <div className="flex justify-around m-4 px-2 gap-2">
    <input className="w-64 flex-1 border-2 rounded-3xl shadow-lg" type="text" placeholder="Type to search the recipee"/> <button className="border-2 rounded-full shadow-2xl px-1">Search</button>
    </div>;
}

function Result(){
 return  <div className="grid grid-cols-4 gap-2 m-4">
<RecipeeCard/> <RecipeeCard/><RecipeeCard/>
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
 

  return (
    <div className="m-4">
    <div className="flex items-center justify-center "><SearchBar/></div>
    
 <Result/>

    </div>
  )
}

export default App
