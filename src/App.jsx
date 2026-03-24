import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import QuantumAI from "./pages/QuantumAI";
import Markets from "./pages/Markets";
import AccountTypes from "./pages/investing/AccountTypes";
import DepositsWithdrawals from "./pages/investing/DepositsWithdrawals";
import Platforms from "./pages/investing/Platforms";
import Promotions from "./pages/investing/Promotions";
import AboutUs from "./pages/company/AboutUs";
import FAQ from "./pages/company/FAQ";
import ContactUs from "./pages/company/ContactUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quantum-ai" element={<QuantumAI />} />
          <Route path="markets" element={<Markets />} />

          <Route path="investing/account-types" element={<AccountTypes />} />
          <Route path="investing/deposits-withdrawals" element={<DepositsWithdrawals />} />
          <Route path="investing/platforms" element={<Platforms />} />
          <Route path="investing/promotions" element={<Promotions />} />

          <Route path="company/about-us" element={<AboutUs />} />
          <Route path="company/faq" element={<FAQ />} />
          <Route path="company/contact-us" element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
