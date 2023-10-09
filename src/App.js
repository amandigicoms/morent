import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        {/* Home component */}
        <Route path="/" element={<Home />} />

        {/* 404 component */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
