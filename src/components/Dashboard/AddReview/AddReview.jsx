
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";


const AddReview = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
   
    const [name, setName] = useState("");
    const [foodFeedback, setFoodFeedback] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const handleAddReview = async () => {
        const review = {
          email: user.email,
          name,
          foodFeedback,
          rating,
          comment,
          userId: user.uid,
        };
    
        try {
          const response = await axiosSecure.post("/reviews", review);
          console.log("Review added successfully:", response.data);
    
          // Display success message with SweetAlert2
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review is added successfully",
            showConfirmButton: false,
            timer: 1500
          });
          setRating(0);
          setFoodFeedback('');
          setComment('');
          setName('');
        } catch (error) {
          console.error("Error adding review:", error);
        }
      };
    return (
        <div>
           <h1 className="text-center text-2xl lg:text-4xl text-yellow-600 font-serif font-bold">------Add a Review------</h1> 
           <div className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="How was our food?"
          value={foodFeedback}
          onChange={(e) => setFoodFeedback(e.target.value)}
          className="border p-2 w-full mt-4"
        />
        <input
          type="number"
          placeholder="Give us stars"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 w-full mt-4"
        />
        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full mt-4"
        />
        <button
          onClick={handleAddReview}
          className="bg-yellow-600  text-white py-2 px-4 mt-4"
        >
          Add Review
        </button>
      </div>
        </div>
    );
};

export default AddReview;