import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const Card2 = ({ image, title, details, id }) => {
    const navigate=useNavigate()
    function LetsGo() {
        navigate(`/details/${id}/`)
    }
    return (
        <div>
            <div className="card w-auto glass">
                <figure  ><img src={`/event_images/${image}`}/></figure>
                <div className="card-body">
                    <h2 className="card-title font-rubik-font">{title}</h2>
                    <p className=' font-rubik-font'>{details.slice(0, 70)}<Link className='kbd kbd-xs text-emerald-500' to={`/details/${id}/`}>Read more</Link> </p>
                </div>
                <div className="card-actions justify-center mb-2">
                    <button onClick={LetsGo} className="btn btn-primary">Hire Us!  </button>
                </div>
            </div>
        </div>
    );
};
Card2.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    id: PropTypes.number,
}
export default Card2;