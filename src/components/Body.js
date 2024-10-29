import { useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
import resList from "../utils/mockData";


const Body = () => {

    const [listOfResturant,setListOfRestaurant]=useState(resList.recipes)

    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button"
                onClick={()=>{
                    const filteredList=listOfResturant.filter((item)=>{
                        return item.rating===4.3;
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