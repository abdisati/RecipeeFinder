
//  export const meals = [
//   {
//     id: "52795",
//     strMeal: "Chicken Handi",
//     strCategory: "Chicken",
//     strArea: "Indian",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
//   },
//   {
//     id: "53358",
//     strMeal: "Chicken Mandi",
//     strCategory: "Chicken",
//     strArea: "Indian",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/er4d081765186828.jpg",
//   },
//   {
//     id: "53001",
//     strMeal: "Butter Chicken",
//     strCategory: "Chicken",
//     strArea: "Indian",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
//   },
//   {
//     id: "53002",
//     strMeal: "Palak Paneer",
//     strCategory: "Vegetarian",
//     strArea: "Indian",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg",
//   },
//   {
//     id: "53003",
//     strMeal: "Lamb Rogan Josh",
//     strCategory: "Lamb",
//     strArea: "Indian",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
//   },
//   {
//     id: "53004",
//     strMeal: "Dal Makhani",
//     strCategory: "Vegetarian",
//     strArea: "Indian",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
//   },
// ];

const data={
  id:"53004",
  meal:"Dal Makhani",
  category:"vegeterian",
  area:"Indian",
  thumb:"https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg"
}

function SearchBar(){
  return <div className="flex justify-around m-4 px-2 gap-2">
    <input className="flex-1 border-2" type="text" placeholder="Type to search the recipee"/> <button className="border-2 rounded-b-xs shadow-2xl px-1">Search</button>
    </div>;
}

function Result(){
 return  <div className="grid grid-cols-4 gap-2">
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
    <>
    <SearchBar/>
 <Result/>

    </>
  )
}

export default App
