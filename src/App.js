// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ResolutionList from "./components/ResolutionList";
// import ResolutionData from "./data/ResolutionData";
import ResolutionForm from "./components/ResolutionForm";
import NextPage from "./pages/NextPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResolutionProvider } from "./context/ResolutionContext";
function App() {
  return (
    <ResolutionProvider>
      <Router>
        <div className="main-container">
          <Header />
          <div className="card-container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <ResolutionForm />
                    <ResolutionList />
                  </>
                }
              ></Route>
              <Route path="/next" element={<NextPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ResolutionProvider>
  );
}

export default App;
