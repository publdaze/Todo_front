import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Todo = lazy(() => import("page/Todo/Todo"));
const SignIn = lazy(() => import("page/SignIn/SignIn"));

function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-screen h-[774px] bg-blue-100 py-16 px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </Router>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
