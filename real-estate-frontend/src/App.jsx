import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Buy from "./Buy";
import SearchResults from "./SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
