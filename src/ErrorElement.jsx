import {useRouteError } from "react-router-dom";
const ErrorElement = () => {
    const error = useRouteError()
    console.log('error: ', error);
    return (
        <div>
            <div className="w-full h-full">
                <p className="text-center text-3xl lg:text-7xl text-red-600 font-black">{error.error.message}</p><hr />
                <p className="text-center text-3xl lg:text-7xl text-red-600 font-black">{error.status}</p><hr />
            </div>
        </div>
    );
};

export default ErrorElement;