import ReactStars from 'react-rating-stars-component';

// eslint-disable-next-line react/prop-types
const StarRating = ({rating}) => {
    return (
        <ReactStars
        count={5}
        value={rating}
        size={24}
        isHalf={true}
        edit={false}
        activeColor="orange"
       
    />
    );
};

export default StarRating;