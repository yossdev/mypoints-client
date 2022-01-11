import { Navigate } from 'react-router-dom'
import useMypointsAuth from '../../Hooks/useMypointsAuth'

const PrivateRoute = ({ children }) => {
  const auth = useMypointsAuth()
  return auth ? children : <Navigate to="/login" />
}

export default PrivateRoute
