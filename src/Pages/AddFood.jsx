// import { useState } from "react";
// import { RiArrowDropDownLine} from "react-icons/ri";
// import Swal from "sweetalert2";




// const AddFood = () => {
//   const [category, setCategory] = useState("");
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const categories = ["Main Course", "Seafoods", "Salads", "Appetizers", "Desserts"];

//     const handleCategorySelect = (selectedCategory) => {
//         setCategory(selectedCategory);
//         setIsDropdownOpen(false);
//     };
//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//         const form=e.target;
//         const title=form.title.value;
//         const description=form.description?.value;
//         const image_url=form.image_url.value;
//         const price=form.price.value;
//         const ratings=form.ratings.value;
//         const ingredients=form.ingredients.value;
//         const category=form.category?.value;
//         const special_offers=form.special_offers.value;
      
//         const data={title,description,image_url,price,ratings,ingredients,category,special_offers}
//         const isConfirmed = await Swal.fire({
//             title: 'Are you sure?',
//             text: 'You won\'t be able to revert this!',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes!',
//             cancelButtonText: 'No!',
//           });
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
//         if (isConfirmed.isConfirmed) {
//             await fetch("https://food-store-server-g3gt.onrender.com/foodsDatabase",{
//             method:"POST",
//             headers:{
//                 "Content-type":"application/json",
//             },
//             body:JSON.stringify(data),
//        })
//        .then((res)=>res.json())
//        .then((data)=>{
//         console.log(data)
//         form.reset()
//         setCategory("");
//         Swal.fire({
//             title: 'Success!',
//             text: 'Food item has been added successfully',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//         Swal.fire({
//             title: 'Error!',
//             text: 'There was an error adding the food item',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//        })
//         }
       
        
//     }
  
//     return (
//         <div>
//         <h1 className="text-center text-2xl lg:text-4xl text-yellow-600  font-serif font-bold">------Add a Food Item------</h1>
  
//         <div className="my-16">
//           <form onSubmit={handleSubmit}>
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//               />
//             </div>
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="text"
//                 name="description"
//                 placeholder="Description"
//               />
//             </div>
           
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="text"
//                 name="image_url"
//                 placeholder="Image URL"
//               />
//             </div>
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="number"
//                 name="price"
//                 placeholder="Price"
//               />
//             </div>
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="text"
//                 name="ratings"
//                 placeholder="Ratings"
//               />
//             </div>
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="text"
//                 name="ingredients"
//                 placeholder="Ingredients"
//               />
//             </div>
//             <div className="mt-2 relative">
//                         <div
//                             className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg flex items-center justify-between cursor-pointer"
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                         >
//                             <span className={category ? "text-gray-700" : "text-gray-400"}>{category || "Select Category"}</span>
//                             <RiArrowDropDownLine className="w-5 h-5 text-3xl font-bold text-gray-500" />
//                         </div>
//                         {isDropdownOpen && (
//                             <ul className="absolute bg-white border border-amber-500 rounded-lg mt-1 w-full z-10 transition-all duration-500 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}">
//                                 {categories.map((cat) => (
//                                     <li
//                                         key={cat}
//                                         className="p-2 hover:bg-gray-200 cursor-pointer"
//                                         onClick={() => handleCategorySelect(cat)}
//                                     >
//                                         {cat}
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//             <div className="mt-2">
//               <input
//                 className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
//                 type="text"
//                 name="special_offers"
//                 placeholder="Special Offers"
//               />
//             </div>
           
//             <div className="mt-2 flex justify-center items-center">
//               <input
//                 className="btn mt-4 w-full bg-yellow-600 text-white text-md "
//                 type="submit"
//                 value="Add food"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     );
// };

// export default AddFood;


import  { useState } from "react";
import Swal from "sweetalert2";
import { RiArrowDropDownLine} from "react-icons/ri";

const AddFood = () => {
    const [category, setCategory] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = ["Main Course", "Seafoods", "Salads", "Appetizers", "Desserts"];

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setIsDropdownOpen(false);
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title?.value;
        const description = form.description?.value;
        const image_url = form.image_url?.value;
        // const photoFile = form.image_url.files[0];
        const price = form.price?.value;
        const ratings = form.ratings?.value;
        const ingredients = form.ingredients?.value;
        const special_offers = form.special_offers?.value;

        // const image_url = URL.createObjectURL(photoFile);

        const data = { title, description, image_url,  price, ratings, ingredients, category, special_offers };

        const isConfirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
        });

        if (isConfirmed.isConfirmed) {
            await fetch("https://food-store-server-g3gt.onrender.com/foodsDatabase", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    form.reset();
                    setCategory("");
                  
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
                });
        }
    };

    return (
        <div>
            <h1 className="text-center text-2xl lg:text-4xl text-yellow-600 font-serif font-bold">------Add a Food Item------</h1>

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
                    {/* <div className="mt-2">
                        <input
                            className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                            type="text"
                            name="ratings"
                            placeholder="Ratings"
                           
                        />
                    </div> */}
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                            type="text"
                            name="ingredients"
                            placeholder="Ingredients"
                        
                        />
                    </div>
                    <div className="mt-2 relative">
                        <div
                            className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg flex items-center justify-between cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className={category ? "text-gray-700" : "text-gray-400"}>{category || "Category"}</span>
                            <RiArrowDropDownLine className="w-5 h-5 text-3xl font-bold text-gray-500" />
                        </div>
                        <div className={`absolute bg-white border border-amber-500 rounded-lg mt-1 w-full z-10 transition-all duration-500 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}>
                            <ul>
                                {categories.map((cat) => (
                                    <li
                                        key={cat}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleCategorySelect(cat)}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-4 w-full border border-amber-500 rounded-lg"
                            type="text"
                            name="special_offers"
                            placeholder="Special Offers"
                            
                        />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <input
                            className="btn mt-4 w-full bg-yellow-600 text-white text-md cursor-pointer"
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