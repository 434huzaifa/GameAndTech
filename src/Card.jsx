import PropTypes from 'prop-types';
const Card = ({ image, title, details }) => {
    return (
        <div className="card w-auto glass">
            <figure ><img src={`/images/${image}`} className='w-96 h-96 object-contain font-rubik-font'/></figure>
            <div className="card-body ">
                <h2 className="card-title font-rubik-font">{title}</h2>
                <p className=' font-rubik-font'>{details} </p>
            </div>
        </div>
    );
};
Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
}
export default Card;