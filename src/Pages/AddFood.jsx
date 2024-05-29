import Swal from "sweetalert2";




const AddFood = () => {
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
        // const confirm = window.confirm("Are you sure you want to proceed?");
        // if (!confirm) {
        //     return;
        // }
        // e.preventDefault()
        // const form=e.target;
        // const title=form.title.value;
        // const description=form.description.value;
        // const image_url=form.image_url.value;
        // const price=form.price.value;
        // const ratings=form.ratings.value;
        // const ingredients=form.ingredients.value;
        // const special_offers=form.special_offers.value;
        // const preparation_time =form.preparation_time.value;
        // const data={title,description,image_url,price,ratings,ingredients,special_offers,preparation_time}
        if (isConfirmed.isConfirmed) {
            await fetch("http://localhost:3000/foods",{
            method:"POST",
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
            text: 'Food item has been added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
            title: 'Error!',
            text: 'There was an error adding the food item',
            icon: 'error',
            confirmButtonText: 'OK'
        });
       })
        }
       
        
    }
  
    return (
        <div>
        <h1 className="text-center text-5xl text-amber-500  font-serif font-bold">------Add a Food Item------</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
           
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="ratings"
                placeholder="Ratings"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="special_offers"
                placeholder="Special Offers"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                type="text"
                name="preparation_time"
                placeholder="Preparation Time"
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-amber-500 text-white text-lg "
                type="submit"
                value="Add food"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddFood;