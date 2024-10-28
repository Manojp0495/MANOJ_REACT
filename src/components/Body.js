import RestaurantContainer from "./RestaurantContainer";


export let myData=[{
 
    "id": 1,
    "name": "Classic Margherita Pizza",
   "cuisine": "Italian",
    "caloriesPerServing": 300,
    "rating": 4.6,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp"

},
{
 
    "id": 2,
    "name": "Cheese Pizza",
   "cuisine": "Italian",
    "caloriesPerServing": 300,
    "rating": 2.6,
    "image": "https://cdn.dummyjson.com/recipe-images/2.webp"

},{
 
    "id": 3,
    "name": "Plain Pizza",
   "cuisine": "Italian",
    "caloriesPerServing": 300,
    "rating": 5.6,
    "image": "https://cdn.dummyjson.com/recipe-images/3.webp"

}]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button"
                onClick={()=>{
                    myData=myData.filter((item)=>{
                        return item.rating>4;
                    })
                    console.log(myData)
                }}
                >filter</button>
            </div>
            <RestaurantContainer myData={myData}/>
        </div>
    );
};

export default Body