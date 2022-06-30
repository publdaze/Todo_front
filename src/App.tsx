import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Todo = lazy(() => import("./page/Todo/Todo"));
const SignIn = lazy(() => import("./page/SignIn/SignIn"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
