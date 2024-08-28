import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Login-registration/GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/firebase.config";


const Registration = () => {
    const [pass,setPass]=useState(true)
    const [showPassword,setShowPassword]=useState(false)
    const {createUser,user,updateUserProfile}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const axiosPublic=useAxiosPublic()
    const from=location?.state?.from?.pathname||'/';
    const togglePasswordVisibility=()=>{
      setShowPassword((prevState)=>!prevState)
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const email=form.email.value;
      // const photoURL = form.photoURL.value;
      const photoFile = form.photo.files[0];
      const password=form.password.value;
      const confirm_password=form.confirm_password.value;
    
      if(password!==confirm_password){
         setPass(false)
      }
      // const photoURL = photoFile ? URL.createObjectURL(photoFile) : ''; 
      // console.log(name,email,photoURL,password,confirm_password)
      if(password==confirm_password){
        try{
          // Upload the photo to Firebase Storage
        // const storageRef = ref(storage, `profilePhotos/${photoFile.name}`);
        // const snapshot = await uploadBytes(storageRef, photoFile);
        // const photoURL = await getDownloadURL(snapshot.ref);
        //   await createUser(email,password)
        //   await updateUserProfile(name,photoURL)
        const userCredential = await createUser(email, password);
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
    
        // Upload the photo to Firebase Storage
        const storageRef = ref(storage, `profilePhotos/${photoFile.name}`);
        await uploadBytes(storageRef, photoFile);
        const photoURL = await getDownloadURL(storageRef);
    
        // Update user profile
        await updateUserProfile(name, photoURL);
          const userInfo={
            name:name,
            email:email,
            photoURL:photoURL
          }
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
             
                Swal.fire({
                  title: 'Success!',
                  text: 'Registration has become successfull',
                  icon: 'success',
                  confirmButtonText: 'OK'
              });
              navigate(from)
              
            }
          })
          
        }catch (error) {
          console.error("Error creating user:", error);
      }
     
      if(user){
          navigate(from)
        }
      }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-amber-500">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered"name="name" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"name="email" required />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">PhotoURL</span>
                </label>
                <input type="text" placeholder="photoURL" className="input input-bordered" name="photoURL"required />
                
              </div> */}
               <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Photo</span>
              </label>
              <input type="file" className="input input-bordered" name="photo" accept="image/*" required />
            </div>

              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password"required />
                
              </div> */}
               <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered pr-10"
                name="password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-16 transform -translate-y-1/2 cursor-pointer text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" className="input input-bordered"name="confirm_password" required />
                
              </div> */}
               <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Confirm Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
                className="input input-bordered pr-10"
                name="confirm_password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-16 transform -translate-y-1/2 cursor-pointer text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
             {
                !pass && (
                    <div className="my-2">
                        <h1 className="text-red-500">Password does not match</h1>
                    </div>
                )
             }
              <div className="form-control mt-6">
                <button className="btn bg-amber-500 text-xl">Register</button>
              </div>
              <p className="text-center font-sherif">or signin with</p>
              <div className="form-control mt-6">
                <GoogleLogin></GoogleLogin>
              </div>
              <div className="mt-6">
              <p>
                Already Have an Account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;