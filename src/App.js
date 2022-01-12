import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Landingpage from './components/pages/Landingpage'
import Login from './components/pages/Login'

import DashboardLayout from './components/pages/Dashboard/Layout'
import Dashboard from './components/pages/Dashboard'
import Claims from './components/pages/Claims'

import LayoutRedeems from './components/pages/Redeems/Layout'
import Redeems from './components/pages/Redeems'
import BankTransfer from './components/pages/Redeems/BankTransfer'
import DigitalProduct from './components/pages/Redeems/DigitalProduct'
import EWallet from './components/pages/Redeems/EWallet'

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
            <Route path="redeems" element={<LayoutRedeems />}>
              <Route index element={<Redeems />} />
              <Route path="bank-transfer" element={<BankTransfer />} />
              <Route path="digital-product" element={<DigitalProduct />} />
              <Route path="e-wallet" element={<EWallet />} />
            </Route>
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
