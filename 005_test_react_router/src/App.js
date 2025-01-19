import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import StudentPage from "./pages/StudentPage";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<StudentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
