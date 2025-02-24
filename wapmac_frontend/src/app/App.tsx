import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../ui/homePage";
import ScrollToTop from "@/shared/presentation/scrollToTop";
import LearnMorePage from "@/ui/learnMorePage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
