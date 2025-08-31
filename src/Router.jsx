import { useState } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import HelpSupport from "./pages/HelpSupport";
import RefundPolicies from "./pages/RefundPolicies";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsConditions from "./pages/TermsConditions";
import ShippingPolicies from "./pages/ShippingPolicies";

const ScrollToTop = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return null;
};

const Loader = ({ loading }) => {
  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xl z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : null;
};

const AppRouter = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop setLoading={setLoading} />
      <Loader loading={loading} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

        <Route path="/help-support" element={<HelpSupport />}></Route>
        <Route path="/refund-policies" element={<RefundPolicies />}></Route>
        <Route path="/terms-conditions" element={<TermsConditions />}></Route>
        <Route path="/privacy-policies" element={<PrivacyPolicies />}></Route>
        <Route path="/shipping-policies" element={<ShippingPolicies />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
