import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import Dashboard from "./components/pages/Dashboard";
import Claims from "./components/pages/Claims";
import Redeems from "./components/pages/Redeems";
import History from "./components/pages/History";
import FAQ from "./components/pages/FAQ";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="claims" element={<Claims />} />
                    <Route path="redeems" element={<Redeems />} />
                    <Route path="history" element={<History />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="profile" element={<Profile />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
