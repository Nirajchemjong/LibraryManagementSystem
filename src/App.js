import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/sign-up-sign-in/Login";
import Signup from "./pages/sign-up-sign-in/Signup";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserAction } from "./pages/user/userAction";
import { auth } from "./config/firebase-config";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Books from "./pages/book/Books";
import History from "./pages/history/History";
import Clients from "./pages/clients/Clients";
function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(getUserAction(user?.uid));
  });
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
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        {/* private routers  */}
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={
            <>
              <h1 className='m-5 text-danger text-center'>
                {" "}
                404 Page not found! stop entering whatever you like MF!
              </h1>
            </>
          }
        ></Route>
        <Route
          path='/books'
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path='/history'
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path='/clients'
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
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
