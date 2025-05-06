import { Navigate, Route, Routes } from 'react-router';

import { Login } from '../auth';
import { Dc, Error, Marvel } from '../heroes';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
      <>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Navigate to={'marvel'} />}  />
              <Route path='dc' element={<Dc />} />
              <Route path='marvel' element={<Marvel />} />
              <Route path='/*' element={<Error />} />
              <Route path='/auth'>
                <Route index element={<Login />} />
              </Route>
          </Routes>
      </>
  )
}
