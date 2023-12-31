import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Nav from "./components/Nav/Nav";
import ProjectDetailsPage from "./Pages/ProjectDetails/ProjectDetailsPage";

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
