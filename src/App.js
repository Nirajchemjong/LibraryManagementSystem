import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/sign-up-sign-in/Login";
import Signup from "./pages/sign-up-sign-in/Signup";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* Public routers  */}
        <Route
          path='/login'
          element={<Login />}
        ></Route>
        <Route
          path='/signup'
          element={<Signup />}
        ></Route>

        <Route
          path='/'
          element={<Home />}
        ></Route>

        {/* private routers  */}
        <Route
          path='/dashboard'
          element={<Dashboard />}
        />
        {/* //{" "}
      <div className=''>
        // <Button variant='primary'>Primary</Button>
        //{" "}
      </div> */}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
