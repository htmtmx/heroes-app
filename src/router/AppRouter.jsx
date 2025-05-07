import { Route, Routes } from 'react-router';

import { Login } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import React from 'react';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<HeroesRoutes />} />
                <Route path='/auth'>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </>
    )
}
