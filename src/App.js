import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from './components/pages/Homepage'
import Dashboard from './components/pages/Dashboard'
import Claims from './components/pages/Claims'
import Redeems from './components/pages/Redeems'
import History from './components/pages/History'
import FAQ from './components/pages/FAQ'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'
import PrivateRoute from './components/private/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />

        {/* Private */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="claims"
          element={
            <PrivateRoute>
              <Claims />
            </PrivateRoute>
          }
        />
        <Route
          path="redeems"
          element={
            <PrivateRoute>
              <Redeems />
            </PrivateRoute>
          }
        />
        <Route
          path="history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />

        <Route
          path="faq"
          element={
            <PrivateRoute>
              <FAQ />
            </PrivateRoute>
          }
        />

        {/* Public */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
