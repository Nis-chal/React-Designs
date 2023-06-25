import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage, PostEdit, Landing } from "./client";
import { MouseMove } from "./client/design";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="1" element={<MouseMove />} />
          <Route path="2" element={<PostEdit />} />
          <Route path="3" element={<Landing />} />
          <Route />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
