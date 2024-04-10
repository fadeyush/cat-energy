import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRouter, publicRouter } from './UI/router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Router: FC = () => {
    const {isAuth} = useTypedSelector(state => state.isAuth);
    return (
        <>{isAuth ?
            <Routes>
                {privateRouter.map(route =>
                    <Route
                        key={route.path}
                        element={<route.element/>}
                        path={route.path}
                    />
                )}
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/*" element={<Navigate to="/about" replace />} />
            </Routes>
            :
            <Routes>
                {publicRouter.map(route =>
                    <Route
                        key={route.path}
                        element={<route.element/>}
                        path={route.path}
                    />
                )}
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
        }</>
    );
};

export default Router;