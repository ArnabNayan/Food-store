// import { Link } from "react-router-dom";


// // eslint-disable-next-line react/prop-types
// const SingleFoodCardDetails = ({food}) => {
//     // eslint-disable-next-line react/prop-types
//     const {id,title,image_url,description,price,ratings}=food;
//     // console.log(food)
//     const handleDelete=async()=>{
//       await fetch (`http://localhost:3000/foods/${id}`,{
//         method:"DELETE"
//       }).then(res=>res.json())
//       .then((data)=>{
//         console.log(data)
       
//       })
//     }
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//         <figure><img className="" src={image_url} alt="Food" /></figure>
//         <div className="card-body">
//           <h2 className="card-title font-bold font-serif text-2xl">{title}</h2>
//           <p className="font-serif text-lg">{description}</p>
//           <p className="font-serif text-lg">Price:{price} tk</p>
//           <p className="font-serif text-lg ">Ratings:{ratings}</p>
//           <div className="card-actions justify-end">
//              <button className="btn bg-amber-500 font-bold font-serif px-2 text-lg">
//              <Link to={`food-details/${id}`} >Details</Link>
//              </button>
//              <button className="btn bg-orange-500 font-bold font-serif px-2 text-lg">
//              <Link to={`food-details/${id}`} >Edit</Link>
//              </button>
//              <button onClick={handleDelete} className="btn bg-yellow-400 font-bold font-serif px-2 text-lg">
//              Delete
//              </button>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default SingleFoodCardDetails;


import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import StarRating from '../StarRating';

// eslint-disable-next-line react/prop-types
const SingleFoodCardDetails = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, title, image_url,  price, ratings,category } = food;
  const navigate = useNavigate();

  const handleDelete = async () => {
    const isConfirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });

    if (isConfirmed.isConfirmed) {
      await fetch(`http://localhost:5000/foodsDatabase/${_id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire('Deleted!', 'The food item has been deleted.', 'success');
          navigate('/dashboard/all-foods'); // Navigate to the all foods page after deletion
        })
        .catch(error => {
          console.error('Error:', error);
          Swal.fire('Error!', 'There was an error deleting the food item.', 'error');
        });
    }
  };

  return (
    <div className="card w-auto bg-base-100  shadow-xl">
      <figure><img className=" h-52 w-64" src={image_url} alt="Food" /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold font-serif text-md lg:text-xl">{title}</h2>
        
        <p className="font-serif text-md">Price: {price} tk</p>
        <p className="font-serif  text-md">Category: {category} </p>
        <p className="font-serif  text-md "><StarRating rating={ratings} /></p>
        <div className="card-actions justify-end">
          {/* <Link to={`food-details/${_id}`} className="btn bg-amber-500 font-bold font-serif px-2 text-xs">Details</Link> */}
          <Link to={`edit/${_id}`} className="btn bg-orange-500 font-bold font-serif px-2 text-sm">Edit</Link>
          <button onClick={handleDelete} className="btn bg-yellow-400 font-bold font-serif px-2 text-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCardDetails;
