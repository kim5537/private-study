import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PostViewPage from "./component/PostViewPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/post/:postNum" element={<PostViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
