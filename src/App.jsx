import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Nav from "./components/Nav";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
