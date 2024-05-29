import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Foods from "../components/home/Foods";
import Question from "../components/home/Question";


const Home = () => {
  const data=useLoaderData();
    return (
        <div>
          <Banner></Banner>
          <Foods data={data}></Foods>
          <Question></Question>
        </div>
    );
};

export default Home;