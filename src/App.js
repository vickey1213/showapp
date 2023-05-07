import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ShowDetail from "./components/ShowDetail";
import ShowList from "./components/ShowList";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
