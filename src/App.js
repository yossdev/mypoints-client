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
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />

        <Route path="claims" element={<Claims />} />
        <Route path="redeems" element={<Redeems />} />

        {/* Dropdownnya dijadiin route aja atau biar cepat dihapus aja dropdownnya */}
        {/* <Route path="/redeems" element={<Redeems />}>
          <Route index element={<Redeems />} />
          <Route path="bank-transfer" element={<Redeems />} />
          <Route path="e-wallet" element={<Redeems />} />
          <Route path="top-up" element={<Redeems />} />
        </Route> */}

        <Route path="history" element={<History />} />
        <Route path="faq" element={<FAQ />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
