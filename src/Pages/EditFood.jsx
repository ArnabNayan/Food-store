import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditFood = () => {
  
    const food=useLoaderData()
    const [title, setTitle] = useState(food.title);
  const [price, setPrice] = useState(food.price);
  const [description, setDescription] = useState(food.description);
  const [ratings, setRatings] = useState(food.ratings);
  const [preparation_time, setPreparationTime] = useState(food.preparation_time);
  const [image_url, setImageURL] = useState(food.image_url);
  const [ingredients, setIngredients] = useState(food.ingredients);
  const[special_offers,setOffers]=useState(food.special_offers)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const title=form.title.value;
        const description=form.description.value;
        const image_url=form.image_url.value;
        const price=form.price.value;
        const ratings=form.ratings.value;
        const ingredients=form.ingredients.value;
        const special_offers=form.special_offers.value;
        const preparation_time =form.preparation_time.value;
        const data={title,description,image_url,price,ratings,ingredients,special_offers,preparation_time}
        const isConfirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
          });
     
        if (isConfirmed.isConfirmed) {
            await fetch(`http://localhost:3000/foods/${food.id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"applacation/json",
            },
            body:JSON.stringify(data),
       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data)
        form.reset()
        Swal.fire({
            title: 'Success!',
            text: 'Food item has been updated successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
            title: 'Error!',
            text: 'There was an error updating the food item',
            icon: 'error',
            confirmButtonText: 'OK'
        });
       })
        }
       
        
    }
  
    return (
        <div>
        <h1 className="text-center text-5xl text-amber-500  font-serif font-bold">------Edit Food Item------</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
            </div>
           
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="ratings"
                placeholder="Ratings"
                value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="special_offers"
                placeholder="Special Offers"
                value={special_offers}
              onChange={(e) =>setOffers(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="preparation_time"
                placeholder="Preparation Time"
                value={preparation_time}
              onChange={(e) => setPreparationTime(e.target.value)}
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-amber-500 text-white text-lg "
                type="submit"
                value="Edit food"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditFood;