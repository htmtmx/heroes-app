import { Navigate, Route, Routes } from 'react-router';

import { Navbar } from '../../ui';
import { Dc, Error, Hero, Marvel, Search } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<Navigate to={'marvel'} />} />
                    <Route path='dc' element={<Dc />} />
                    <Route path='marvel' element={<Marvel />} />
                    <Route path='search' element={<Search />} />
                    <Route path='hero' element={<Hero />} />
                    <Route path='/*' element={<Error />} />
                </Route>
            </Routes>
        </>
    );
};
