import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Landingpage from './components/pages/Landingpage'
import Login from './components/pages/Login'

import DashboardLayout from './components/pages/Dashboard/Layout'
import Dashboard from './components/pages/Dashboard'
import Claims from './components/pages/Claims'
import Redeems from './components/pages/Redeems'

import History from './components/pages/History'
import FAQ from './components/pages/FAQ'

import Profile from './components/pages/Profile'

import PrivateRoute from './components/private/PrivateRoute'

import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Login />} />

        {/* Private */}
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="claims" element={<Claims />} />
            <Route path="redeems" element={<Redeems />} />
            <Route path="history" element={<History />} />
            <Route path="profile" element={<Profile />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
