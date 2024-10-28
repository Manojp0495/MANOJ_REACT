const RestaurantCard = (props) => {
    console.log(props)
  const{image,name,cuisine,rating,caloriesPerServing}=props?.resData;
   
    return (
        <div className="rescard">
             
            <img 
                className="logo" 
                src={image} 
                alt="Restaurant Dish" 
            />
            <div className="card-info">
               <h4>{name}</h4>
               <h4>{cuisine}</h4>
               <h4>{rating} Rating</h4>
               <h4><span>&#36;</span>{caloriesPerServing}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard