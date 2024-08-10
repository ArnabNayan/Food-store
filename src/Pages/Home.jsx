import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Foods from "../components/home/Foods";
import Question from "../components/home/Question";
import Offer from "../components/home/Offer";
import FoodieZone from "../components/home/FoodieZone";
import Gallery from "../components/home/Gallery";
import Company from "../components/home/Company";
import TopFood from "../components/home/TopFood";
import Customer from "../components/home/Customer";


const Home = () => {
  const data=useLoaderData();
    return (
        <div>
          <Banner></Banner>
          <Foods data={data}></Foods>
          <Offer></Offer>
          <Gallery></Gallery>
          <Question></Question>
          <TopFood></TopFood>
          <FoodieZone></FoodieZone>
          <Company></Company>
          <Customer></Customer>
        </div>
    );
};

export default Home;