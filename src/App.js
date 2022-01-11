import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from './components/pages/Homepage'
import Dashboard from './components/pages/Dashboard'
import Claims from './components/pages/Claims'
import Transfer from './components/pages/BankTransfer'
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
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="claims" element={<Claims />} />
          <Route path="redeems" element={<Redeems />} />
          <Route path="history" element={<History />} />

          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Public */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
