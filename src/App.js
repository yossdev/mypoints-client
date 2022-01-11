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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pubic */}
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />

        {/* Private */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="claims" element={<Claims />} />
        <Route path="redeems" element={<Redeems />} />
        <Route path="history" element={<History />} />
        <Route path="faq" element={<FAQ />} />

        {/* Public */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
