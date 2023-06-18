import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem("token"); // Get the token from your Redux store or wherever it is stored

    return (
        <Route
            {...rest}
            element={token ? <Element /> : <Navigate to="/login" />} // Render the component only if the token is present, otherwise navigate to the login page
        />
    );
};

export default PrivateRoute;