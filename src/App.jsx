import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Detail from './pages/Detail';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/:category" element={<SubCategoryPage />} />
        <Route path="/:category/:detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
