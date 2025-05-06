import { Dc } from '../heroes/pages/Dc';
import { Login } from '../auth/pages/Login';
import { Marvel } from '../heroes/pages/Marvel';
import { Navigate, Route, Routes } from 'react-router';
import { Error } from '../heroes/pages/Error';

export const AppRouter = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<Navigate to={'/marvel'} />}  />
              <Route path='dc' element={<Dc />} />
              <Route path='login' element={<Login />} />
              <Route path='marvel' element={<Marvel />} />
              <Route path='/*' element={<Error />} />
          </Routes>
      </>
  )
}
