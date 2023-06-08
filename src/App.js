import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/sign-up-sign-in/Login";
import Signup from "./pages/sign-up-sign-in/Signup";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
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
