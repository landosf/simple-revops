import { Link, Route, Switch } from "wouter";
import { Toaster } from "@/../../components/ui/toaster";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CompanyPage from "./pages/CompanyPage";
import BookStrategyCallPage from "./pages/BookStrategyCallPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/book-strategy-call" component={BookStrategyCallPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">404 Page Not Found</h1>
            <Link href="/">
              <a className="text-primary hover:underline">Return Home</a>
            </Link>
          </div>
        </Route>
      </Switch>
      <Toaster />
    </div>
  );
}

export default App;
