import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = (props: { allowedRoles: number[] }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const { allowedRoles } = props;

    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : auth?.user ? (
        <Navigate to='/unauthorized' state={{ from: location }} replace />
    ) : (
        <Navigate to='/login' state={{ from: location }} replace />
    );
};

export default RequireAuth;
