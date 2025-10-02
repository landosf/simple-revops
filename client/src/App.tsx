import { Route, Router } from "wouter";
import { Toaster } from "@/../../components/ui/toaster";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CompanyPage from "./pages/CompanyPage";
import BookStrategyCallPage from "./pages/BookStrategyCallPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/book-strategy-call" component={BookStrategyCallPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;