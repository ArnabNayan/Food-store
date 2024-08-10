import Countdown from 'react-countdown';
const endingDate=new Date("2024-08-20")

const Countdowns = () => {
    return (
        <div>
           <Countdown className='font-bold font-serif text-5xl text-amber-500' date={endingDate} /> 
        </div>
    );
};

export default Countdowns;