import { useEffect, useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfResturant,setListOfRestaurant]=useState([])

useEffect(()=>{
    fetchData();
},[])

const fetchData=async()=>{
    const data=await fetch("https://dummyjson.com/recipes");
    const json=await data.json();
    setListOfRestaurant(json.recipes);
}

if(listOfResturant.length===0){
    return <Shimmer />;
}

    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button"
                onClick={()=>{
                    const filteredList=listOfResturant.filter((item)=>{
                        return item.rating>4.5;
                    })
                    setListOfRestaurant(filteredList)
                }}
                >filter</button>
            </div>
            <RestaurantContainer myData={listOfResturant}/>
        </div>
    );
};

export default Body