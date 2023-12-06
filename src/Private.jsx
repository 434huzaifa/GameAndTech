import PropTypes from 'prop-types';
import { useContext } from 'react';
import { myContext } from './App';
import { Navigate } from 'react-router-dom';
const Private = ({ children }) => {
    const { user } = useContext(myContext)
    if (user) {
        return children ;
    }
    return <Navigate to="/login">Login</Navigate>;
};

Private.propTypes = {
    children: PropTypes.node,
}

export default Private;