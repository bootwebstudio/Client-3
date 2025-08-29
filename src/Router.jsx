import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

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

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/thanks" element={<Thanks />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>

      <Route path="/help-support" element={<HelpSupport />}></Route>
      <Route path="/refund-policies" element={<RefundPolicies />}></Route>
      <Route path="/terms-conditions" element={<TermsConditions />}></Route>
      <Route path="/privacy-policies" element={<PrivacyPolicies />}></Route>
      <Route path="/shipping-policies" element={<ShippingPolicies />}></Route>

      <Route path="/not-found" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRouter;
