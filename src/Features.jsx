import PropTypes from 'prop-types';
import Card from './Card';
const Features = ({features}) => {
    
    return (
        <div className="grid grid-cols-3 gap-4 justify-items-center ">
            {
                features.map((x,index)=>{
                    return <Card key={index} image={x.image} title={x.title} details={x.details}></Card>
                })
            }
        </div>
    );
};
Features.propTypes ={
    features:PropTypes.array
}
export default Features;