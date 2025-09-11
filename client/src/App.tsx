import { Route, Router } from "wouter";
import { Toaster } from "@/../../components/ui/toaster";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;