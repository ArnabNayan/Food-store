import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <h1 className="text-center text-2xl lg:text-4xl text-yellow-600 font-serif font-bold">------Make Your Payment------</h1> 
            <div className="mt-10">
              <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
              </Elements>
            </div>
        </div>
    );
};

export default Payment;