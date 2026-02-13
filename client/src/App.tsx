import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FAQSchema from "./components/FAQSchema";
import ExitIntent from "./components/ExitIntent";
import Erstinformation from "./pages/Erstinformation";
import Beschwerden from "./pages/Beschwerden";

const Blog = lazy(() => import("./pages/Blog"));
const TierartPage = lazy(() => import("./pages/TierartPage"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#097E92] border-t-transparent rounded-full animate-spin" /></div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/hund" component={TierartPage} />
        <Route path="/katze" component={TierartPage} />
        <Route path="/pferd" component={TierartPage} />
        <Route path="/ratgeber/:slug?" component={Blog} />
        <Route path="/erstinformation" component={Erstinformation} />
        <Route path="/beschwerden" component={Beschwerden} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <CookieConsent />
          <FAQSchema />
          <ExitIntent />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
